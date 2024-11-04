import type { TGarderobeSession } from '../../types';
import { GarderobeProvider } from '../Provider';
import { SPOTIFY_TOKEN_URL } from './constants';
import { refreshSession } from './methods/refreshSession';
import { createSessionWithClientCredentials } from './methods/createSessionWithClientCredentials';

export class SpotifyGarderobeProvider extends GarderobeProvider {
  async refreshSession(refreshToken: string): Promise<TGarderobeSession> {
    return await refreshSession(
      SPOTIFY_TOKEN_URL,
      this.clientId,
      this.clientSecret,
      refreshToken,
    );
  }

  createSession = {
    withClientCredentials: async (): Promise<TGarderobeSession> => {
      return await createSessionWithClientCredentials(
        SPOTIFY_TOKEN_URL,
        this.clientId,
        this.clientSecret,
      );
    },
  };
}
