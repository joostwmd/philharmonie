import { SPOTIFY_METHODS_PATHS } from '../../../../../src/conductor/providers/spotify/constants';
import {
  spotifySingleArtistResponse,
  spotifyMultipleArtistsResponse,
  spotifyArtistsAlbumsResponse,
  spotifyArtistsTopTracksResponse,
  spotifyArtistsRelatedArtistsResponse,
} from '../../../mockData/spotify/responses/artist';
import { SPOTIFY_URL_PARAMS } from '../../constants';
import { validateRequest, createMockSuccessResponse } from '../../hepler';

export function handleSpotifyArtistMockRequests(
  url: string,
  options?: RequestInit,
) {
  if (url.match(/\/v1\/artists\/[^/]+$/)) {
    // get artist by id
    const errorResponse = validateRequest('GET', options?.method, [], url);
    if (errorResponse) return errorResponse;
    return createMockSuccessResponse(spotifySingleArtistResponse);
  } else if (url.includes('/v1/artists?ids=')) {
    // get multiple artists by ids
    const errorResponse = validateRequest(
      'GET',
      options?.method,
      [SPOTIFY_URL_PARAMS.ids],
      url,
    );
    if (errorResponse) return errorResponse;
    return createMockSuccessResponse(spotifyMultipleArtistsResponse);
  } else if (url.match(/\/v1\/artists\/[^/]+\/albums$/)) {
    // get artist's albums
    const errorResponse = validateRequest(
      'GET',
      options?.method,
      [
        SPOTIFY_URL_PARAMS.market,
        SPOTIFY_URL_PARAMS.include_groups,
        SPOTIFY_URL_PARAMS.limit,
        SPOTIFY_URL_PARAMS.offset,
      ],
      url,
    );
    if (errorResponse) return errorResponse;
    return createMockSuccessResponse(spotifyArtistsAlbumsResponse);
  } else if (url.match(/\/v1\/artists\/[^/]+\/top-tracks$/)) {
    // get artist's top tracks
    const errorResponse = validateRequest(
      'GET',
      options?.method,
      [SPOTIFY_URL_PARAMS.market],
      url,
    );
    if (errorResponse) return errorResponse;
    return createMockSuccessResponse(spotifyArtistsTopTracksResponse);
  } else if (url.match(/\/v1\/artists\/[^/]+\/related-artists$/)) {
    // get related artists
    const errorResponse = validateRequest('GET', options?.method, [], url);
    if (errorResponse) return errorResponse;
    return createMockSuccessResponse(spotifyArtistsRelatedArtistsResponse);
  }
}
