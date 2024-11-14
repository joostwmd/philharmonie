import { createConductor } from '../../dist';
import { fetchAllSpotifyPlaylistTracks } from '../recticals/fetchAllSpotifyPlaylistsTracks';
import { matchTrackOnAppleMusic } from '../recticals/matchTrackOnAppleMusic';

export async function transferSpotifyPlaylistToAppleMusic(
  playlistId: string,
): Promise<void> {
  const conductor = createConductor({
    spotify: {
      tokens: {
        accessToken: 'SPOTIFY_ACCESS_TOKEN',
      },
      defaultMarket: 'US',
    },
    appleMusic: {
      tokens: {
        developerToken: 'APPLE_MUSIC_DEVELOPER_TOKEN',
      },
      defaultMarket: 'us',
    },
  });

  const spotifyPlaylist = await conductor.spotify.playlist.getById(
    playlistId,
    {},
  );
  const playlistName = spotifyPlaylist.name;
  const playlistDescription = spotifyPlaylist.description;

  const spotifyTracks = await fetchAllSpotifyPlaylistTracks(playlistId);

  // Set user market to get content from the correct region. Ensures that the user has access to the content.
  await conductor.appleMusic.setUserMarket();

  const appleMusicIds = [];
  for (const track of spotifyTracks) {
    const metadata = {
      artistName: track.artists[0]!.name,
      trackName: track.name,
      duration: track.duration_ms,
      releaseDate: track.album.release_date,
    };
    const trackMatch = await matchTrackOnAppleMusic(
      track.external_ids.isrc!,
      metadata,
    );
    if (trackMatch) {
      appleMusicIds.push(trackMatch.id);
    }
  }
  console.log('appleMusicIds', appleMusicIds, appleMusicIds.length);

  const appleMusicPlaylist = await conductor.appleMusic.playlist.create({
    name: playlistName,
    description: playlistDescription ? playlistDescription : '',
  });

  const appleMusicPlaylistId = appleMusicPlaylist.data[0]!.id;
  console.log('appleMusicPlaylistId', appleMusicPlaylistId);

  // Add all tracks at once
  try {
    const response = await conductor.appleMusic.playlist.addTracksToPlaylist(
      appleMusicPlaylistId,
      appleMusicIds,
      {},
    );
    console.log('All tracks added successfully:', response);
  } catch (error) {
    console.error('Error adding tracks:', error);
  }
}
