import type { AppleMusicApiTokens } from '../../Conductor';
import { Provider } from '../Provider';
import { Album } from './methods/Album';
import { Playlist } from './methods/Playlist';
import { Search } from './methods/Search';
import { Song } from './methods/Song';
import { User } from './methods/User';

export class AppleMusic extends Provider {
  public album: Album;
  public playlist: Playlist;
  public song: Song;
  public search: Search;
  public user: User;

  constructor(apiTokens: AppleMusicApiTokens) {
    super(apiTokens, 'appleMusic');

    this.album = new Album(this);
    this.playlist = new Playlist(this);
    this.song = new Song(apiTokens);
    this.search = new Search(apiTokens);
    this.user = new User(apiTokens);
  }
}
