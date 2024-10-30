import type { TSession } from '../../types';
import { UsherProvider } from '../provider';
import { SPOTIFY_TOKEN_URL } from './constants';
import { refreshSession } from './methods/refreshSession';
import { createSessionWithClientCredentials } from './methods/createSessionWithClientCredentials';

export class SpotifyUsherProvider extends UsherProvider {
  async refreshSession(refreshToken: string): Promise<TSession> {
    console.log('Refreshing Spotify session');

    return await refreshSession(
      SPOTIFY_TOKEN_URL,
      this.clientId,
      this.clientSecret,
      refreshToken,
    );
  }

  createSession = {
    withClientCredentials: async (): Promise<TSession> => {
      console.log('Creating Spotify session with client credentials');

      return await createSessionWithClientCredentials(
        SPOTIFY_TOKEN_URL,
        this.clientId,
        this.clientSecret,
      );
    },
  };
}
