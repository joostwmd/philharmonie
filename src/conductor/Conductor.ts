import { Spotify } from './providers/spotify';
import { AppleMusic } from './providers/appleMusic';
import type { TConductorConfig } from './types';

export class Conductor {
  public spotify: Spotify;
  public appleMusic: AppleMusic;

  constructor(config: TConductorConfig, fetch: any) {
    this.spotify = new Spotify(config.spotify);
    this.appleMusic = new AppleMusic(config.appleMusic);
  }
}
