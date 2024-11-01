import type { TGarderobeProviderConfig } from './types';
import { SpotifyGarderobeProvider } from './providers/spotify';

export class Garderobe {
  public spotify: SpotifyGarderobeProvider;

  constructor(providersConfig: TGarderobeProviderConfig) {
    console.log('Creating Usher instance', providersConfig.spotify);
    this.spotify = new SpotifyGarderobeProvider(providersConfig.spotify);
  }
}
