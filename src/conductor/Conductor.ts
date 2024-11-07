import { SpotifyConductorProvider } from './providers/spotify';
import { AppleMusicConductorProvider } from './providers/appleMusic';
import type { TConductorInstance, TConductorProvidersConfig } from './types';

export class Conductor<Config extends TConductorProvidersConfig> {
  public spotify?: SpotifyConductorProvider;
  public appleMusic?: AppleMusicConductorProvider;
  private fetch: typeof fetch;

  constructor(config: Config, fetchFunction?: typeof fetch) {
    this.fetch = fetchFunction || fetch;

    if (config.spotify) {
      this.spotify = new SpotifyConductorProvider(config.spotify, this.fetch);
    }
    if (config.appleMusic) {
      this.appleMusic = new AppleMusicConductorProvider(
        config.appleMusic,
        this.fetch,
      );
    }
  }
}

export function createConductor<Config extends TConductorProvidersConfig>(
  config: Config,
  fetchFunction?: typeof fetch,
): TConductorInstance<Config> {
  const conductor = new Conductor(
    config,
    fetchFunction,
  ) as TConductorInstance<Config>;
  return conductor;
}
