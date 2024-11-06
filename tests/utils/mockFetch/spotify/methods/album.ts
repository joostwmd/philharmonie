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
  if (url.match(/\/v1\/albums\/[^/]+$/)) {
    // single album
    const errorResponse = validateRequest(
      'GET',
      options?.method,
      [SPOTIFY_URL_PARAMS.market],
      url,
    );
    if (errorResponse) return errorResponse;
    return createMockSuccessResponse(spotifySingleAlbumResponse);
  } else if (url.includes('/v1/albums?ids=')) {
    // multiple albums
    const errorResponse = validateRequest(
      'GET',
      options?.method,
      [SPOTIFY_URL_PARAMS.market, SPOTIFY_URL_PARAMS.ids],
      url,
    );
    if (errorResponse) return errorResponse;
    return createMockSuccessResponse(spotifySeveralAlbumsResponse);
  } else if (url.match(/\/v1\/albums\/[^/]+\/tracks$/)) {
    // album tracks
    const errorResponse = validateRequest(
      'GET',
      options?.method,
      [
        SPOTIFY_URL_PARAMS.market,
        SPOTIFY_URL_PARAMS.limit,
        SPOTIFY_URL_PARAMS.offset,
      ],
      url,
    );
    if (errorResponse) return errorResponse;
    return createMockSuccessResponse(spotifyAlbumTracksResponse);
  } else if (url.includes('/v1/me/albums') && options?.method === 'GET') {
    // get user's saved albums
    const errorResponse = validateRequest(
      'GET',
      options?.method,
      [
        SPOTIFY_URL_PARAMS.market,
        SPOTIFY_URL_PARAMS.limit,
        SPOTIFY_URL_PARAMS.offset,
      ],
      url,
    );
    if (errorResponse) return errorResponse;
    return createMockSuccessResponse(spotifyUsersSavedAlbumsResponse);
  } else if (url.includes('/v1/me/albums?ids=') && options?.method === 'PUT') {
    // save albums for user
    const errorResponse = validateRequest(
      'PUT',
      options?.method,
      [SPOTIFY_URL_PARAMS.ids],
      url,
      //intended body
      options.body,
    );
    if (errorResponse) return errorResponse;
    return createMockSuccessResponse(null);
  } else if (
    url.includes('/v1/me/albums?ids=') &&
    options?.method === 'DELETE'
  ) {
    // remove albums for user
    const errorResponse = validateRequest(
      'DELETE',
      options?.method,
      [SPOTIFY_URL_PARAMS.ids],
      url,
      //intended body
      options.body,
    );
    if (errorResponse) return errorResponse;
    return createMockSuccessResponse(null);
  } else if (url.includes('/v1/me/albums/contains?ids=')) {
    // check user's saved albums
    const errorResponse = validateRequest(
      'GET',
      options?.method,
      [SPOTIFY_URL_PARAMS.ids],
      url,
    );
    if (errorResponse) return errorResponse;
    return createMockSuccessResponse(spotifyCheckUserSavedAlbumsResponse);
  }
}
