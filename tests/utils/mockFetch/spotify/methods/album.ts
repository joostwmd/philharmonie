import { spotifyAlbumIdsSample } from '../../../mockData/spotify/input';
import {
  spotifyAlbumTracksResponse,
  spotifySeveralAlbumsResponse,
  spotifySingleAlbumResponse,
  spotifyUsersSavedAlbumsResponse,
} from '../../../mockData/spotify/responses/albums';
import { spotifyCheckUserSavedAlbumsResponse } from '../../../mockData/spotify/responses/track';
import { SPOTIFY_URL_PARAMS } from '../../constants';
import { createMockSuccessResponse, validateRequest } from '../../hepler';

export function handleSpotifyAlbumMockRequests(
  url: string,
  options?: RequestInit,
) {
  if (
    url.includes('/v1/albums/') &&
    !url.includes('/tracks') &&
    !url.includes('?ids=')
  ) {
    console.log('mock fetch spotify single album');
    // single album
    const errorResponse = validateRequest({
      intendedMethod: 'GET',
      usedMethod: options?.method,
      intendedParams: [SPOTIFY_URL_PARAMS.market],
      url,
    });
    if (errorResponse) return errorResponse;
    return createMockSuccessResponse(spotifySingleAlbumResponse);
  } else if (url.includes('/v1/albums?ids=')) {
    console.log('mock fetch spotify several albums');
    // multiple albums
    const errorResponse = validateRequest({
      intendedMethod: 'GET',
      usedMethod: options?.method,
      intendedParams: [SPOTIFY_URL_PARAMS.market, SPOTIFY_URL_PARAMS.ids],
      url,
    });
    if (errorResponse) return errorResponse;
    return createMockSuccessResponse(spotifySeveralAlbumsResponse);
  } else if (url.includes('/tracks')) {
    console.log('mock fetch spotify album tracks');
    // album tracks
    const errorResponse = validateRequest({
      intendedMethod: 'GET',
      usedMethod: options?.method,
      intendedParams: [
        SPOTIFY_URL_PARAMS.market,
        SPOTIFY_URL_PARAMS.limit,
        SPOTIFY_URL_PARAMS.offset,
      ],
      url,
    });
    if (errorResponse) return errorResponse;
    return createMockSuccessResponse(spotifyAlbumTracksResponse);
  } else if (
    url.includes('/v1/me/albums') &&
    options?.method === 'GET' &&
    !url.includes('contains')
  ) {
    console.log('mock fetch spotify user saved albums');
    // get user's saved albums
    const errorResponse = validateRequest({
      intendedMethod: 'GET',
      usedMethod: options?.method,
      intendedParams: [
        SPOTIFY_URL_PARAMS.market,
        SPOTIFY_URL_PARAMS.limit,
        SPOTIFY_URL_PARAMS.offset,
      ],
      url,
    });
    if (errorResponse) return errorResponse;
    return createMockSuccessResponse(spotifyUsersSavedAlbumsResponse);
  } else if (url.includes('/v1/me/albums') && options?.method === 'PUT') {
    console.log('mock fetch spotify save album for user', options.body);

    // save albums for user
    const errorResponse = validateRequest({
      intendedMethod: 'PUT',
      usedMethod: options?.method,
      intendedParams: [],
      url,
      intendedBody: { ids: spotifyAlbumIdsSample },
      usedBody: options.body,
    });
    if (errorResponse) return errorResponse;
    return createMockSuccessResponse(null);
  } else if (url.includes('/v1/me/albums') && options?.method === 'DELETE') {
    console.log('mock fetch spotify remove album for user');
    // remove albums for user
    const errorResponse = validateRequest({
      intendedMethod: 'DELETE',
      usedMethod: options?.method,
      intendedParams: [],
      url,
      usedBody: options.body,
      intendedBody: { ids: [spotifyAlbumIdsSample] },
    });
    if (errorResponse) return errorResponse;
    return createMockSuccessResponse(null);
  } else if (url.includes('/v1/me/albums/contains?ids=')) {
    console.log('mock fetch spotify check user saved albums');
    // check user's saved albums
    const errorResponse = validateRequest({
      intendedMethod: 'GET',
      usedMethod: options?.method,
      intendedParams: [SPOTIFY_URL_PARAMS.ids],
      url,
    });
    if (errorResponse) return errorResponse;
    return createMockSuccessResponse(spotifyCheckUserSavedAlbumsResponse);
  }

  console.error('unhandled spotify album request', url);
}
