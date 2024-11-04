import type { Conductor } from '../../../../conductor/Conductor';
import { handleRemoveDuplicatesFromSpotifyPlaylist } from '../../etudes/spotify/removeDuplicatesFromPlaylist';

export async function handleRemoveDuplicatesFromUsersPlaylists(
  conductor: Conductor,
) {
  const userPlaylists =
    await conductor.spotify.playlist.getCurrentUserPlaylists({
      limit: 50,
    });

  userPlaylists.items.forEach(async (playlist) => {
    await handleRemoveDuplicatesFromSpotifyPlaylist(conductor, playlist.id);
  });
}
