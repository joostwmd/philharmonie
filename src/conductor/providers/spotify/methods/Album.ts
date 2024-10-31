import { makeGetRequest } from '../../../../utils';

export class Album {
  private apiKey: string;
  private apiAlbumUrl: string;

  constructor(apiKey: string, apiBaseUrl: string) {
    this.apiKey = apiKey;
    this.apiAlbumUrl = apiBaseUrl + 'albums/';
  }

  async getById(albumId: string): Promise<string> {
    console.log('spotify.album.getById', albumId);
    const url = `${this.apiAlbumUrl}${albumId}`;
    return await makeGetRequest(url, this.apiKey, 'spotfiy');
  }

  // Add more album-related methods here as needed
}
