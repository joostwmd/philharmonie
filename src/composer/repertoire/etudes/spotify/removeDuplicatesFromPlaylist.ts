import type { Conductor } from '../../../../conductor/Conductor';

export async function handleRemoveDuplicatesFromSpotifyPlaylist(
  conductor: Conductor,
  playlistId: string,
): Promise<void> {
  const playlist = await conductor.spotify.playlist.getById(playlistId);
  const tracks = playlist.tracks.items;

  const trackIds = new Set<string>();
  const tracksToRemove = tracks.filter((track) => {
    if (trackIds.has(track.track.id)) {
      return true;
    }

    trackIds.add(track.track.id);
    return false;
  });

  await conductor.spotify.playlist.removeItemsFromPlaylist({
    playlistId,
    tracks: tracksToRemove.map((track) => ({
      uri: track.track.uri,
    })),
  });
}
