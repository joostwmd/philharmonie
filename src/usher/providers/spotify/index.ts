import { UsherProvider } from '../provider';
import { SPOTIFY_TOKEN_URL } from './constants';
import { refreshSession } from './methods/refreshSession';

export class SpotifyUsherProvider extends UsherProvider {
  async refreshSession(refreshToken: string): Promise<void> {
    console.log('Refreshing Spotify session');

    return await refreshSession(
      SPOTIFY_TOKEN_URL,
      this.clientId,
      this.clientSecret,
      refreshToken,
    );
  }
}
