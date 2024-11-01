import type { TUsherProviderConfig } from './types';
import { SpotifyUsherProvider } from './providers/spotify';

export class Usher {
  public spotify: SpotifyUsherProvider;

  constructor(providersConfig: TUsherProviderConfig) {
    this.spotify = new SpotifyUsherProvider();
  }
}
