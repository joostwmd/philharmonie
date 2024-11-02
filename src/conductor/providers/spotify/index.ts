import { Album } from './methods/Album';
import { Playlist } from './methods/Playlist';
import { User } from './methods/User';
import { Track } from './methods/Track';
import { Artist } from './methods/Artist';
import { Search } from './methods/Search';
import { Provider } from '../Provider';

export class Spotify extends Provider {
  public album: Album;
  public playlist: Playlist;
  public user: User;
  public track: Track;
  public artist: Artist;
  public search: Search;

  constructor(apiToken: string) {
    super(apiToken, 'spotify');

    this.album = new Album(this);
    this.playlist = new Playlist(this);
    this.user = new User(apiToken);
    this.track = new Track(apiToken);
    this.artist = new Artist(this);
    this.search = new Search(this);
  }
}
