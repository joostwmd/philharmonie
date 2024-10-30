import type { IProvider } from '../types';

export interface TAppleAlbum {
  id: string;
  name: string;
  artists: string[];
  release_date: string;
  total_tracks: number;
  images: string[];
  thisIsAAppleType: true;
}

export interface IAppleProvider extends IProvider<'apple'> {}
