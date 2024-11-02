import { Spotify } from './providers/spotify';
import { AppleMusic } from './providers/appleMusic';
import type { APITokens } from './types';

export class Conductor {
  public spotify: Spotify;
  public appleMusic: AppleMusic;

  constructor(apiTokens: APITokens) {
    this.spotify = new Spotify(apiTokens.spotify || '');
    this.appleMusic = new AppleMusic(apiTokens.appleMusic!);
  }
}
