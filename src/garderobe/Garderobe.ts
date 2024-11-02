import type { TGarderobeProviderConfig } from './types';
import { SpotifyGarderobeProvider } from './providers/spotify';

export class Garderobe {
  public spotify: SpotifyGarderobeProvider;

  constructor(providersConfig: TGarderobeProviderConfig) {
    this.spotify = new SpotifyGarderobeProvider(providersConfig.spotify);
  }
}
