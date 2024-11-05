import { spotifySearchResponse } from '../../../mockData/spotify/responses/search';
import { returnMockResponse } from '../../hepler';

export function handleSpotifySearchMockRequest(
  url: string,
  options?: RequestInit,
) {
  console.log('handleSpotifySearchMockRequest url', url);
  console.log('handleSpotifySearchMockRequest options', options);

  if (url.includes('/v1/search')) {
    // search for an item
    return returnMockResponse(spotifySearchResponse);
  }
}
