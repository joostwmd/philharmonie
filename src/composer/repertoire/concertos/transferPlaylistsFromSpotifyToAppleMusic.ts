import type { Conductor } from '../../../conductor/Conductor';

export async function handleTransferPlaylistFromSpotifyToAppleMusic(
  conductor: Conductor,
  playlistId: string,
) {
  // Fetch playlist details
  const playlistDetails = await conductor.spotify.playlist.getById(playlistId);
  console.log('playlistDetails', playlistDetails);

  const playlistName = playlistDetails.name;
  const playlistDescription = playlistDetails.description;
  const totalTracks = playlistDetails.tracks.total;

  const isrcs: string[] = [];

  // Fetch playlist tracks in batches of 50
  for (let offset = 0; offset < totalTracks; offset += 50) {
    const playlistItems = await conductor.spotify.playlist.getItems({
      playlistId: playlistId,
      tokens: 'need to fix that',
      limit: 50,
      offset: offset,
      additional_types: 'track',
    });

    const playlistTracks = playlistItems.items.map((item) => item.track);
    const playlistTracksISRCs = playlistTracks.map(
      (track) => track.external_ids.isrc,
    );

    isrcs.push(...playlistTracksISRCs);
  }

  console.log('SPOTIFY PART OVER', isrcs);
  console.log('total isrcs', isrcs.length);

  const appleMusicTrackIds = [];
  for (let i = 0; i < isrcs.length; i += 25) {
    const batchISRCs = isrcs.slice(i, i + 25);
    console.log('batchISRCs', batchISRCs);
    console.log('batchISRCs length', batchISRCs.length);
    const appleMusicTracks =
      await conductor.appleMusic.song.getMultipleByISRC(batchISRCs);

    console.log(
      'appleMusicTracks found with isrc',
      appleMusicTracks.data.length,
    );

    const filteredTracks = appleMusicTracks.data.filter((track) =>
      batchISRCs.includes(track.attributes!.isrc),
    );

    console.log('filteredTracks', filteredTracks);
    console.log('filteredTracks length', filteredTracks.length);

    const trackIds = filteredTracks.map((track) => track.id);
    appleMusicTrackIds.push(...trackIds);
  }

  console.log('APPLE MUSIC TRACKS', appleMusicTrackIds);
  console.log('total apple music tracks', appleMusicTrackIds.length);

  return;

  // Create Apple Music playlist
  const appleMusicPlaylist = await conductor.appleMusic.playlist.create({
    name: playlistName,
    description: playlistDescription,
  });

  await conductor.appleMusic.playlist.addTracksToPlaylist({
    playlistId: appleMusicPlaylist.data[0]!.id,
    trackIds: appleMusicTrackIds,
  });

  console.log('APPLE MUSIC PART OVER');
}

export async function handleTransferUsersPlaylistsFromSpotifyToAppleMusic(
  conductor: Conductor,
) {
  const spotifyPlaylists =
    await conductor.spotify.playlist.getCurrentUserPlaylists({
      limit: 50,
    });

  console.log('spotify Playlist', spotifyPlaylists);

  for (let playlist of spotifyPlaylists.items) {
    await handleTransferPlaylistFromSpotifyToAppleMusic(conductor, playlist.id);
  }
}
