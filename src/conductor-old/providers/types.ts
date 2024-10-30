import type { TSession, TConductorProviders } from '../types';
import type { TSpotifyAlbum } from './spotify/types';

export type TProviderMethods = {
  spotify: {
    artist: {
      getAlbums: (id: string) => Promise<TSpotifyAlbum[]>;
    };
  };
  apple: {
    artist: {
      getAlbums: (id: string) => Promise<TAppleAlbum[]>;
    };
  };
};

export interface IProvider<T extends TConductorProviders> {
  setSession(session: TSession<T>): void;

  album: {
    saveAlbumsForUser: (ids: string[]) => Promise<void>;
  };

  user: {
    followArtistById: (id: string) => Promise<string>;
  };

  artist: {
    getAlbums: TProviderMethods[T]['artist']['getAlbums'];
  };

  track: {
    saveTracksForUser: (ids: string[]) => Promise<void>;
  };
}
