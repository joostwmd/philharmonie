import type { TConductorProviderConfig } from '../../types';
import { ConductorProvider } from '../Provider';
import { Album } from './methods/Album';
import { Playlist } from './methods/Playlist';
import { Search } from './methods/Search';
import { Song } from './methods/Song';
import { User } from './methods/User';

export class AppleMusic extends ConductorProvider {
  public album: Album;
  public playlist: Playlist;
  public song: Song;
  public search: Search;
  public user: User;

  constructor(providerConfig: TConductorProviderConfig<'appleMusic'>) {
    super('appleMusic', providerConfig);

    this.album = new Album(this);
    this.playlist = new Playlist(this);
    this.song = new Song(this);
    this.search = new Search(this);
    this.user = new User(this);
  }
}
