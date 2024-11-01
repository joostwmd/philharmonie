import type { AppleMusicApiTokens } from '../../Conductor';
import { Album } from './methods/Album';
import { Playlist } from './methods/Playlist';
import { Search } from './methods/Search';
import { Song } from './methods/Song';
import { User } from './methods/User';

export class AppleMusic {
  public album: Album;
  public playlist: Playlist;
  public song: Song;
  public search: Search;
  public user: User;

  constructor(apiTokens: AppleMusicApiTokens) {
    this.album = new Album(apiTokens);
    this.playlist = new Playlist(apiTokens);
    this.song = new Song(apiTokens);
    this.search = new Search(apiTokens);
    this.user = new User(apiTokens);
  }
}
