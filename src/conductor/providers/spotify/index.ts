import { Album } from './methods/Album';
import { Playlist } from './methods/Playlist';
import { User } from './methods/User';
import { Track } from './methods/Track';
import { Artist } from './methods/Artist';
import { Search } from './methods/Search';

export class Spotify {
  public album: Album;
  public playlist: Playlist;
  public user: User;
  public track: Track;
  public artist: Artist;
  public search: Search;

  constructor(apiToken: string) {
    this.album = new Album(apiToken);
    this.playlist = new Playlist(apiToken);
    this.user = new User(apiToken);
    this.track = new Track(apiToken);
    this.artist = new Artist(apiToken);
    this.search = new Search(apiToken);
  }
}
