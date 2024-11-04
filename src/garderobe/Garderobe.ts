import type { TGarderobe, TGarderobeProviderConfig } from './types';
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
): TGarderobe<Config> {
  const garderobe = new Garderobe(providersConfig) as TGarderobe<Config>;
  return garderobe;
}
