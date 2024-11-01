import type { TUsherProviderConfig } from './types';
import { SpotifyUsherProvider } from './providers/spotify';

export class Usher {
  public spotify: SpotifyUsherProvider;

  constructor(providersConfig: TUsherProviderConfig) {
    console.log('Creating Usher instance', providersConfig.spotify);
    this.spotify = new SpotifyUsherProvider(providersConfig.spotify);
  }
}
