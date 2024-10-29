import type { TSession, TConductorProviders } from '../types';

export interface IProvider<T extends TConductorProviders> {
  setSession(session: TSession<T>): void;

  album: {
    saveAlbumsForUser: (ids: string[]) => Promise<void>;
  };

  user: {
    followArtistById: (id: string) => Promise<string>;
  };

  artist: {
    getAlbums: (id: string) => Promise<any>;
  };

  track: {
    saveTracksForUser: (ids: string[]) => Promise<void>;
  };
}
