import type { TGarderobeInstance, TGarderobeProviderConfig } from './types';
import { SpotifyGarderobeProvider } from './providers/spotify';

export class Garderobe<Config extends TGarderobeProviderConfig> {
  public spotify?: SpotifyGarderobeProvider;

  constructor(providersConfig: Config) {
    if (providersConfig.spotify) {
      this.spotify = new SpotifyGarderobeProvider(providersConfig.spotify);
    }
  }
}

export function createGarderobe<Config extends TGarderobeProviderConfig>(
  providersConfig: Config,
): TGarderobeInstance<Config> {
  const garderobe = new Garderobe(
    providersConfig,
  ) as TGarderobeInstance<Config>;
  return garderobe;
}
