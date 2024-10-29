import type { IProvider } from '../types';

export interface ISpotifyProvider extends IProvider<'spotify'> {
  album: {
    saveAlbumsForUser: (ids: string[]) => Promise<void>;
  };

  user: {
    followArtistById: (id: string) => Promise<string>;
  };

  artist: {
    getAlbums: (id: string) => Promise<TSpotifyAlbum[]>;
  };

  track: {
    saveTracksForUser: (ids: string[]) => Promise<void>;
  };
}

export interface TSpotifyAlbum {
  id: string;
  name: string;
  artists: string[];
  release_date: string;
  total_tracks: number;
  images: string[];
  thisIsASpotifyType: true;
}
