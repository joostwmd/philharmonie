import { makeGetRequest } from '../../../utils';

export class Playlist {
  private apiKey: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  async getTracks(playlistId: string): Promise<string> {
    const url = `https://api.spotify.com/v1/playlists/${playlistId}/tracks`;
    return await makeGetRequest(url, this.apiKey, 'spotfiy');
  }

  // Add more playlist-related methods here as needed
}
