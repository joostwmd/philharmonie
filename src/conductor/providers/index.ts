import type { TConductorProviders, TSession } from '../types';
import { IProvider } from './types';

export abstract class Provider<T extends TConductorProviders>
  implements IProvider<T>
{
  protected session?: TSession<T>;

  setSession(session: TSession<T>): void {
    this.session = session;
  }

  abstract album: {
    saveAlbumsForUser: (ids: string[]) => Promise<void>;
  };

  abstract user: {
    followArtistById: (id: string) => Promise<string>;
  };

  abstract artist: {
    getAlbums: (id: string) => Promise<any>;
  };

  abstract track: {
    saveTracksForUser: (ids: string[]) => Promise<void>;
  };
}
