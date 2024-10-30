import type {
  TUsherProviders,
  IUsher,
  TUsherProviderConfig,
  TSession,
} from './types';
import type { IUsherProvider } from './providers/types';
import { SpotifyUsherProvider } from './providers/spotify';

export class Usher implements IUsher {
  private currentProvider: IUsherProvider | null;
  private providers: Partial<Record<TUsherProviders, IUsherProvider>>;

  constructor(providers: TUsherProviderConfig[]) {
    this.currentProvider = null;
    this.providers = {};
    this.initProviders(providers);
  }

  private initProviders(providers: TUsherProviderConfig[]): void {
    providers.forEach((provider) => {
      switch (provider.name) {
        case 'spotify':
          const spotifyProvider = new SpotifyUsherProvider() as IUsherProvider;
          spotifyProvider.initWithCredentials(provider);
          this.providers[provider.name] = spotifyProvider;
          break;
        default:
          throw new Error(`Unknown provider: ${provider}`);
      }
    });
  }

  private setCurrentProvider(providerName: TUsherProviders): void {
    if (this.providers[providerName]) {
      this.currentProvider = this.providers[providerName]!;
    } else {
      throw new Error(`Provider ${providerName} is not available`);
    }
  }

  public async refreshSession(
    providerName: TUsherProviders,
    refreshToken: string,
  ): Promise<TSession> {
    this.setCurrentProvider(providerName);
    if (!this.currentProvider) {
      throw new Error('No provider selected');
    }
    return await this.currentProvider.refreshSession(refreshToken);
  }

  public createSession = {
    withClientCredentials: async (
      providerName: TUsherProviders,
    ): Promise<TSession> => {
      this.setCurrentProvider(providerName);
      if (!this.currentProvider) {
        throw new Error('No provider selected');
      }

      return await this.currentProvider.createSession.withClientCredentials();
    },
  };
}
