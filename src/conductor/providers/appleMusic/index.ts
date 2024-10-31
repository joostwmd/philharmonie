// src/providers/spotify/Spotify.ts

import type { AppleMusicApiTokens } from '../../Conductor';
import { Album } from './methods/Album';
import { Playlist } from './Playlist';

export class AppleMusic {
  public album: Album;
  public playlist: Playlist;

  constructor(apiTokens: AppleMusicApiTokens) {
    this.album = new Album(apiTokens);
    this.playlist = new Playlist(apiTokens);
  }
}
