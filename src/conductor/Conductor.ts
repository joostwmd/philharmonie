import { Spotify } from './providers/spotify';
import { AppleMusic } from './providers/appleMusic';
import type { TConductorInstance, TConductorProvidersConfig } from './types';

export class Conductor<Config extends TConductorProvidersConfig> {
  public spotify?: Spotify;
  public appleMusic?: AppleMusic;

  constructor(config: Config) {
    if (config.spotify) {
      this.spotify = new Spotify(config.spotify);
    }
    if (config.appleMusic) {
      this.appleMusic = new AppleMusic(config.appleMusic);
    }
  }
}

export function createConductor<Config extends TConductorProvidersConfig>(
  config: Config,
): TConductorInstance<Config> {
  const conductor = new Conductor(config) as TConductorInstance<Config>;
  return conductor;
}
