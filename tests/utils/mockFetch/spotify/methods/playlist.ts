import {
  spotifySinglePlaylistResponse,
  spotifyPlaylistSnapshotResponse,
  spotifyListOfCurrentUsersPlaylistsResponse,
  spotifyListOfUsersPlaylistsResponse,
  spotifyCreatePlaylistResponse,
} from '../../../mockData/spotify/responses/playlist';
import { SPOTIFY_URL_PARAMS } from '../../constants';
import { createMockSuccessResponse, validateRequest } from '../../hepler';

export async function handleSpotifyPlaylistMockRequests(
  url: string,
  options?: RequestInit,
) {
  // Playlists
  if (url.match(/\/v1\/playlists\/[^/]+$/) && options?.method === 'GET') {
    // get playlist by id
    const errorResponse = validateRequest(
      'GET',
      options?.method,
      [
        SPOTIFY_URL_PARAMS.market,
        SPOTIFY_URL_PARAMS.fields,
        SPOTIFY_URL_PARAMS.additional_types,
      ],
      url,
    );
    if (errorResponse) return errorResponse;
    return createMockSuccessResponse(spotifySinglePlaylistResponse);
  } else if (
    url.match(/\/v1\/playlists\/[^/]+$/) &&
    options?.method === 'PUT'
  ) {
    // change playlist details
    const errorResponse = validateRequest('PUT', options?.method, [], url);
    if (errorResponse) return errorResponse;
    return createMockSuccessResponse(null);
  } else if (
    url.match(/\/v1\/playlists\/[^/]+\/tracks$/) &&
    options?.method === 'GET'
  ) {
    // get playlist items
    const errorResponse = validateRequest(
      'GET',
      options?.method,
      [
        SPOTIFY_URL_PARAMS.market,
        SPOTIFY_URL_PARAMS.fields,
        SPOTIFY_URL_PARAMS.limit,
        SPOTIFY_URL_PARAMS.offset,
        SPOTIFY_URL_PARAMS.additional_types,
      ],
      url,
    );
    if (errorResponse) return errorResponse;
    return createMockSuccessResponse(spotifyPlaylistSnapshotResponse);
  } else if (
    url.match(/\/v1\/playlists\/[^/]+\/tracks$/) &&
    options?.method === 'PUT'
  ) {
    // update playlist items
    const errorResponse = validateRequest(
      'PUT',
      options?.method,
      [SPOTIFY_URL_PARAMS.uris],
      url,
    );
    if (errorResponse) return errorResponse;
    return createMockSuccessResponse(spotifyPlaylistSnapshotResponse);
  } else if (
    url.match(/\/v1\/playlists\/[^/]+\/tracks$/) &&
    options?.method === 'POST'
  ) {
    // add items to playlist
    const errorResponse = validateRequest(
      'POST',
      options?.method,
      [SPOTIFY_URL_PARAMS.position, SPOTIFY_URL_PARAMS.uris],
      url,
    );
    if (errorResponse) return errorResponse;
    return createMockSuccessResponse(spotifyPlaylistSnapshotResponse);
  } else if (
    url.match(/\/v1\/playlists\/[^/]+\/tracks$/) &&
    options?.method === 'DELETE'
  ) {
    // remove playlist items
    const errorResponse = validateRequest('DELETE', options?.method, [], url);
    if (errorResponse) return errorResponse;
    return createMockSuccessResponse(spotifyPlaylistSnapshotResponse);
  } else if (url.includes('/v1/me/playlists') && options?.method === 'GET') {
    // get current user's playlists
    const errorResponse = validateRequest(
      'GET',
      options?.method,
      [SPOTIFY_URL_PARAMS.limit, SPOTIFY_URL_PARAMS.offset],
      url,
    );
    if (errorResponse) return errorResponse;
    return createMockSuccessResponse(
      spotifyListOfCurrentUsersPlaylistsResponse,
    );
  } else if (
    url.match(/\/v1\/users\/[^/]+\/playlists$/) &&
    options?.method === 'GET'
  ) {
    // get user's playlists
    const errorResponse = validateRequest(
      'GET',
      options?.method,
      [SPOTIFY_URL_PARAMS.limit, SPOTIFY_URL_PARAMS.offset],
      url,
    );
    if (errorResponse) return errorResponse;
    return createMockSuccessResponse(spotifyListOfUsersPlaylistsResponse);
  } else if (
    url.match(/\/v1\/users\/[^/]+\/playlists$/) &&
    options?.method === 'POST'
  ) {
    // create playlist
    const errorResponse = validateRequest('POST', options?.method, [], url);
    if (errorResponse) return errorResponse;
    return createMockSuccessResponse(spotifyCreatePlaylistResponse);
  } else if (
    url.match(/\/v1\/playlists\/[^/]+\/images$/) &&
    options?.method === 'PUT'
  ) {
    // add cover image to playlist
    const errorResponse = validateRequest('PUT', options?.method, [], url);
    if (errorResponse) return errorResponse;
    return createMockSuccessResponse(null);
  }
}
