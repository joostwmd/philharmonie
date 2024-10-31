import { makeGetRequest } from '../../../utils';

export class Album {
  private apiKey: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  async getById(albumId: string): Promise<string> {
    console.log('spotify.album.getById', albumId);
    const url = `https://api.spotify.com/v1/albums/${albumId}`;
    return await makeGetRequest(url, this.apiKey, 'spotfiy');
  }

  // Add more album-related methods here as needed
}
