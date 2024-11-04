import { SpotifyConductorProvider } from './providers/spotify';
import { AppleMusicConductorProvider } from './providers/appleMusic';
import type { TConductorInstance, TConductorProvidersConfig } from './types';

export class Conductor<Config extends TConductorProvidersConfig> {
  public spotify?: SpotifyConductorProvider;
  public appleMusic?: AppleMusicConductorProvider;

  constructor(config: Config) {
    if (config.spotify) {
      this.spotify = new SpotifyConductorProvider(config.spotify);
    }
    if (config.appleMusic) {
      this.appleMusic = new AppleMusicConductorProvider(config.appleMusic);
    }
  }
}

export function createConductor<Config extends TConductorProvidersConfig>(
  config: Config,
): TConductorInstance<Config> {
  const conductor = new Conductor(config) as TConductorInstance<Config>;
  return conductor;
}
