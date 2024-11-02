import { Album } from './methods/Album';
import { Playlist } from './methods/Playlist';
import { User } from './methods/User';
import { Track } from './methods/Track';
import { Artist } from './methods/Artist';
import { Search } from './methods/Search';
import { ConductorProvider } from '../Provider';
import type { TConductorProviderConfig } from '../../types';

export class Spotify extends ConductorProvider {
  public album: Album;
  public playlist: Playlist;
  public user: User;
  public track: Track;
  public artist: Artist;
  public search: Search;

  constructor(providerConfig: TConductorProviderConfig<'spotify'>) {
    super('spotify', providerConfig);

    this.album = new Album(this);
    this.playlist = new Playlist(this);
    this.user = new User(this);
    this.track = new Track(this);
    this.artist = new Artist(this);
    this.search = new Search(this);
  }
}
