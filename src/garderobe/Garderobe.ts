import type { ProviderInstances, TGarderobeProviderConfig } from './types';
import { SpotifyGarderobeProvider } from './providers/spotify';

export class Garderobe<Config extends TGarderobeProviderConfig> {
  public providers: ProviderInstances<Config>;

  constructor(providersConfig: Config) {
    this.providers = {} as ProviderInstances<Config>;

    if (providersConfig.spotify) {
      this.providers.spotify = new SpotifyGarderobeProvider(
        providersConfig.spotify,
      );
    }
  }
}
