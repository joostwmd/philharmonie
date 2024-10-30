// src/providers/spotify/Spotify.ts

import { Album } from './Album';
import { Playlist } from './Playlist';

export class Spotify {
  public album: Album;
  public playlist: Playlist;

  constructor(apiToken: string) {
    this.album = new Album(apiToken);
    this.playlist = new Playlist(apiToken);
  }
}
