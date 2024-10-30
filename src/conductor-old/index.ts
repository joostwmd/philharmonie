import type { IProvider } from './providers/types';
import type { TSession, TConductorProviders } from './types';
import { SpotifyProvider } from './providers/spotify';

export class Conductor {
  private currentProvider: IProvider<TConductorProviders> | null;
  private providers: Partial<
    Record<TConductorProviders, IProvider<TConductorProviders>>
  >;

  constructor(providers: TConductorProviders[]) {
    this.currentProvider = null;
    this.providers = {};
    this.initProviders(providers);
  }

  private initProviders(providers: TConductorProviders[]): void {
    providers.forEach((provider) => {
      switch (provider) {
        case 'spotify':
          this.providers[provider] =
            new SpotifyProvider() as IProvider<TConductorProviders>;
          break;
        case 'apple':
          // Initialize Apple provider here
          console.log('Apple provider initialized');
          break;
        default:
          throw new Error(`Unknown provider: ${provider}`);
      }
    });
  }

  private setCurrentProvider(providerName: TConductorProviders): void {
    if (this.providers[providerName]) {
      this.currentProvider = this.providers[providerName]!;
    } else {
      throw new Error(`Provider ${providerName} is not available`);
    }
  }

  setSession<T extends TConductorProviders>(
    providerName: T,
    session: TSession<T>,
  ): void {
    this.setCurrentProvider(providerName);
    this.currentProvider!.setSession(session);
  }

  album = {
    saveAlbumsForUser: async (ids: string[]): Promise<void> => {
      if (!this.currentProvider) {
        throw new Error('No provider selected');
      }
      return await this.currentProvider.album.saveAlbumsForUser(ids);
    },
  };

  user = {
    followArtistById: async (id: string): Promise<any> => {
      if (!this.currentProvider) {
        throw new Error('No provider selected');
      }
      return await this.currentProvider.user.followArtistById(id);
    },
  };

  artist = {
    getAlbums: async (id: string): Promise<any> => {
      if (!this.currentProvider) {
        throw new Error('No provider selected');
      }
      return await this.currentProvider.artist.getAlbums(id);
    },
  };

  track = {
    saveTracksForUser: async (ids: string[]): Promise<void> => {
      if (!this.currentProvider) {
        throw new Error('No provider selected');
      }
      return await this.currentProvider.track.saveTracksForUser(ids);
    },
  };
}
