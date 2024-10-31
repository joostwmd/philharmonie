import { makeGetRequest } from '../../../../utils';
import { SPOTIFY_API_BASE_URL, SPOTIFY_METHODS_PATHS } from '../constants';
import type { ISpotifyAlbum } from '../types';

export class Album {
  private apiKey: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  async getById(albumId: string): Promise<ISpotifyAlbum> {
    console.log('spotify.album.getById', albumId);
    const url = `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.album}${albumId}`;
    console.log('url', url);
    return await makeGetRequest(url, this.apiKey, 'spotfiy');
  }

  // Add more album-related methods here as needed
}
