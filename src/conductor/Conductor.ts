// src/Conductor.ts

import { Spotify } from './providers/spotify';
import { AppleMusic } from './providers/appleMusic';

export type AppleMusicApiTokens = {
  developerToken: string;
  userToken?: string;
};

interface APITokens {
  spotify?: string;
  appleMusic?: AppleMusicApiTokens;
}

export class Conductor {
  public spotify: Spotify;
  public appleMusic: AppleMusic;

  constructor(apiTokens: APITokens) {
    this.spotify = new Spotify(apiTokens.spotify || '');
    this.appleMusic = new AppleMusic(apiTokens.appleMusic!);
  }
}
