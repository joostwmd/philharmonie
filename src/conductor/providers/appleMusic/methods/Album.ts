import { makeGetRequest } from '../../../../utils';
import type { AppleMusicApiTokens } from '../../../Conductor';

export class Album {
  private apiKeys: AppleMusicApiTokens;

  constructor(apiKeys: AppleMusicApiTokens) {
    this.apiKeys = apiKeys;
  }

  async getById(albumId: string): Promise<number> {
    console.log('apple-music.album.getById', albumId);
    const url = `https://api.spotify.com/v1/albums/${albumId}`;
    return await makeGetRequest(url, this.apiKeys, 'apple-music');
    return 0;
  }

  // Add more album-related methods here as needed
}
