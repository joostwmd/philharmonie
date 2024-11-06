import { spotifySearchResponse } from '../../../mockData/spotify/responses/search';
import { SPOTIFY_URL_PARAMS } from '../../constants';
import { createMockSuccessResponse, validateRequest } from '../../hepler';

export function handleSpotifySearchMockRequest(
  url: string,
  options?: RequestInit,
) {
  if (url.includes('/v1/search')) {
    const errorResponse = validateRequest({
      intendedMethod: 'GET',
      usedMethod: options?.method,
      intendedParams: [
        SPOTIFY_URL_PARAMS.market,
        SPOTIFY_URL_PARAMS.query,
        SPOTIFY_URL_PARAMS.type,
        SPOTIFY_URL_PARAMS.limit,
        SPOTIFY_URL_PARAMS.offset,
        SPOTIFY_URL_PARAMS.include_external,
      ],
      url,
    });
    if (errorResponse) return errorResponse;
    return createMockSuccessResponse(spotifySearchResponse);
  }
}
