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
  if (
    url.includes('/v1/artists') &&
    !url.includes('?ids=') &&
    !url.includes('/albums') &&
    !url.includes('/top-tracks') &&
    !url.includes('/related-artists')
  ) {
    console.log('mock fetch spotify single artist');
    // get artist by id
    const errorResponse = validateRequest({
      intendedMethod: 'GET',
      usedMethod: options?.method,
      intendedParams: [],
      url,
    });
    if (errorResponse) return errorResponse;
    return createMockSuccessResponse(spotifySingleArtistResponse);
  } else if (url.includes('/v1/artists/?ids=')) {
    console.log('mock fetch spotify multiple artists');
    // get multiple artists by ids
    const errorResponse = validateRequest({
      intendedMethod: 'GET',
      usedMethod: options?.method,
      intendedParams: [SPOTIFY_URL_PARAMS.ids],
      url,
    });
    if (errorResponse) return errorResponse;
    return createMockSuccessResponse(spotifyMultipleArtistsResponse);
  } else if (url.includes('/v1/artists/') && url.includes('/albums')) {
    console.log('mock fetch spotify artist albums');
    // get artist's albums
    const errorResponse = validateRequest({
      intendedMethod: 'GET',
      usedMethod: options?.method,
      intendedParams: [
        SPOTIFY_URL_PARAMS.market,
        SPOTIFY_URL_PARAMS.include_groups,
        SPOTIFY_URL_PARAMS.limit,
        SPOTIFY_URL_PARAMS.offset,
      ],
      url,
    });
    if (errorResponse) return errorResponse;
    return createMockSuccessResponse(spotifyArtistsAlbumsResponse);
  } else if (url.includes('/v1/artists/') && url.includes('/top-tracks')) {
    console.log('mock fetch spotify artist top tracks');
    // get artist's top tracks
    const errorResponse = validateRequest({
      intendedMethod: 'GET',
      usedMethod: options?.method,
      intendedParams: [SPOTIFY_URL_PARAMS.market],
      url,
    });
    if (errorResponse) return errorResponse;
    return createMockSuccessResponse(spotifyArtistsTopTracksResponse);
  } else if (url.includes('/v1/artists/') && url.includes('/related-artists')) {
    // get related artists
    const errorResponse = validateRequest({
      intendedMethod: 'GET',
      usedMethod: options?.method,
      intendedParams: [],
      url,
    });
    if (errorResponse) return errorResponse;
    return createMockSuccessResponse(spotifyArtistsRelatedArtistsResponse);
  }

  console.error('unhandled spotify artist request', url);
}
