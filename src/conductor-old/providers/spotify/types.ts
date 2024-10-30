import type { IProvider } from '../types';

export interface TSpotifyAlbum {
  id: string;
  name: string;
  artists: string[];
  release_date: string;
  total_tracks: number;
  images: string[];
  thisIsASpotifyType: true;
}

export interface ISpotifyProvider extends IProvider<'spotify'> {}
