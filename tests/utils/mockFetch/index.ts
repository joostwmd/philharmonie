import { SPOTIFY_API_BASE_URL } from './spotify/constants';
import { handleSpotifyMockFetch } from './spotify';
import { APPLE_MUSIC_API_BASE_URL } from './appleMusic/costants';
import { handleAppleMusicMockFetch } from './appleMusic';

export async function mockFetch(url: string, options?: RequestInit) {
  console.log('mockFetch url', url);
  console.log('mockFetch options', options);

  if (url.includes(SPOTIFY_API_BASE_URL)) {
    return handleSpotifyMockFetch(url, options);
  } else if (url.includes(APPLE_MUSIC_API_BASE_URL)) {
    return handleAppleMusicMockFetch(url, options);
  }
}
