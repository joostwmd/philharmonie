import type { TConductorProviders, TSession } from '../types';
import type { IProvider, TProviderMethods } from './types';

export abstract class Provider<T extends TConductorProviders>
  implements IProvider<T>
{
  protected session?: TSession<T>;

  protected getSession(): TSession<T> {
    if (!this.session) {
      throw new Error('No active session');
    }
    return this.session;
  }

  setSession(session: TSession<T>): void {
    this.session = session;
  }

  abstract album: {
    saveAlbumsForUser: (ids: string[]) => Promise<void>;
  };

  abstract user: {
    followArtistById: (id: string) => Promise<string>;
  };

  // abstract artist: {
  //   getAlbums: (id: string) => Promise<any>;
  // };

  abstract artist: TProviderMethods[T]['artist'];

  abstract track: {
    saveTracksForUser: (ids: string[]) => Promise<void>;
  };
}
