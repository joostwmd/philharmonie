import { SPOTIFY_API_BASE_URL } from './constants';
import { handleSpotifyMockFetch } from './spotify';

export async function mockFetch(url: string, options?: RequestInit) {
  console.log('mockFetch url', url);
  console.log('mockFetch options', options);

  if (url.includes(SPOTIFY_API_BASE_URL)) {
    return handleSpotifyMockFetch(url, options);
  }
}
