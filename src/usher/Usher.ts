import type {
  TUsherProviders,
  IUsher,
  TUsherProviderConfig,
  TSession,
} from './types';
import type { IUsherProvider } from './providers/types';
import { SpotifyUsherProvider } from './providers/spotify';

export class Usher implements IUsher {
  public spotify: SpotifyUsherProvider;

  constructor(providersConfigs: TUsherProviderConfig[]) {
    this.spotify = new SpotifyUsherProvider();
  }
}
