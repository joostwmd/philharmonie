import type { TGarderobeInstance, TGarderobeProviderConfig } from './types';
import { SpotifyGarderobeProvider } from './providers/spotify';

export class Garderobe<Config extends TGarderobeProviderConfig> {
  public spotify?: SpotifyGarderobeProvider;
  private fetch: typeof fetch;

  constructor(providersConfig: Config, fetchFunction?: typeof fetch) {
    this.fetch = fetchFunction || fetch;

    if (providersConfig.spotify) {
      this.spotify = new SpotifyGarderobeProvider(
        providersConfig.spotify,
        this.fetch,
      );
    }
  }
}

export function createGarderobe<Config extends TGarderobeProviderConfig>(
  providersConfig: Config,
  fetchFunction?: typeof fetch,
): TGarderobeInstance<Config> {
  const garderobe = new Garderobe(
    providersConfig,
    fetchFunction,
  ) as TGarderobeInstance<Config>;
  return garderobe;
}
