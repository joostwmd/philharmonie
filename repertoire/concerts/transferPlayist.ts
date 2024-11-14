import { transferAppleMusicPlaylistToSpotify } from '../conertionos/transferAppleMusicPlaylistToSpotify';
import { transferSpotifyPlaylistToAppleMusic } from '../conertionos/transferSpotifyPlaylistToAppleMusic';

export async function transferPlayist(
  from: string,
  to: string,
  playlistId: string,
): Promise<void> {
  if (from === 'spotify' && to === 'appleMusic') {
    await transferSpotifyPlaylistToAppleMusic(playlistId);
  } else if (from === 'appleMusic' && to === 'spotify') {
    await transferAppleMusicPlaylistToSpotify(playlistId);
  }
}
