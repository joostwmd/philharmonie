import {
  spotifyAddItemsToPlaylistOptionsSample,
  spotifyChangePlaylistDetailsOptionsSample,
  spotifyCreatePlaylistOptionsSample,
  spotifyUpdatePlaylistItemsOptionsSample,
} from '../../../mockData/spotify/input';
import {
  spotifySinglePlaylistResponse,
  spotifyPlaylistSnapshotResponse,
  spotifyListOfCurrentUsersPlaylistsResponse,
  spotifyListOfUsersPlaylistsResponse,
  spotifyCreatePlaylistResponse,
  spotifyGetItemsOfPlaylistResponse,
} from '../../../mockData/spotify/responses/playlist';
import { SPOTIFY_URL_PARAMS } from '../constants';
import { createMockSuccessResponse, validateRequest } from '../../hepler';

export async function handleSpotifyPlaylistMockRequests(
  url: string,
  options?: RequestInit,
) {
  if (
    url.includes('/v1/playlists') &&
    !url.includes('/tracks') &&
    options?.method === 'GET'
  ) {
    console.log('mock fetch spotify single playlist');
    // get playlist by id
    const errorResponse = validateRequest({
      intendedMethod: 'GET',
      usedMethod: options?.method,
      intendedParams: [
        SPOTIFY_URL_PARAMS.market,
        SPOTIFY_URL_PARAMS.fields,
        SPOTIFY_URL_PARAMS.additional_types,
      ],
      url,
    });
    if (errorResponse) return errorResponse;
    return createMockSuccessResponse(spotifySinglePlaylistResponse);
  } else if (
    url.includes('/v1/playlists') &&
    !url.includes('/tracks') &&
    !url.includes('/images') &&
    options?.method === 'PUT'
  ) {
    console.log('mock fetch spotify change playlist details');
    // change playlist details
    const errorResponse = validateRequest({
      intendedMethod: 'PUT',
      usedMethod: options?.method,
      intendedParams: [],
      url,
      usedBody: options?.body,
      intendedBody: spotifyChangePlaylistDetailsOptionsSample,
    });
    if (errorResponse) return errorResponse;
    return createMockSuccessResponse(null);
  } else if (
    url.includes('/v1/playlists') &&
    url.includes('/tracks') &&
    options?.method === 'GET'
  ) {
    console.log('mock fetch spotify get playlist items');
    // get playlist items
    const errorResponse = validateRequest({
      intendedMethod: 'GET',
      usedMethod: options?.method,
      intendedParams: [
        SPOTIFY_URL_PARAMS.market,
        SPOTIFY_URL_PARAMS.fields,
        SPOTIFY_URL_PARAMS.limit,
        SPOTIFY_URL_PARAMS.offset,
        SPOTIFY_URL_PARAMS.additional_types,
      ],
      url,
    });
    if (errorResponse) return errorResponse;
    return createMockSuccessResponse(spotifyGetItemsOfPlaylistResponse);
  } else if (
    url.includes('/v1/playlists') &&
    url.includes('/tracks') &&
    options?.method === 'PUT'
  ) {
    console.log('mock fetch spotify update playlist items');
    // update playlist items
    const errorResponse = validateRequest({
      intendedMethod: 'PUT',
      usedMethod: options?.method,
      intendedParams: [SPOTIFY_URL_PARAMS.uris],
      url,
      usedBody: options?.body,
      intendedBody: spotifyUpdatePlaylistItemsOptionsSample,
    });
    if (errorResponse) return errorResponse;
    return createMockSuccessResponse(spotifyPlaylistSnapshotResponse);
  } else if (
    url.includes('/v1/playlists') &&
    url.includes('/tracks') &&
    options?.method === 'POST'
  ) {
    console.log('mock fetch spotify add items to playlist');
    // add items to playlist
    const errorResponse = validateRequest({
      intendedMethod: 'POST',
      usedMethod: options?.method,
      intendedParams: [],
      url,
      usedBody: options?.body,
      intendedBody: spotifyAddItemsToPlaylistOptionsSample,
    });
    if (errorResponse) return errorResponse;
    return createMockSuccessResponse(spotifyPlaylistSnapshotResponse);
  } else if (
    url.includes('/v1/playlists') &&
    url.includes('/tracks') &&
    options?.method === 'DELETE'
  ) {
    console.log('mock fetch spotify remove playlist items');
    // remove playlist items
    const errorResponse = validateRequest({
      intendedMethod: 'DELETE',
      usedMethod: options?.method,
      intendedParams: [],
      url,
    });
    if (errorResponse) return errorResponse;
    return createMockSuccessResponse(spotifyPlaylistSnapshotResponse);
  } else if (url.includes('/v1/me/playlists') && options?.method === 'GET') {
    console.log('mock fetch spotify get current user playlists');
    // get current user's playlists
    const errorResponse = validateRequest({
      intendedMethod: 'GET',
      usedMethod: options?.method,
      intendedParams: [SPOTIFY_URL_PARAMS.limit, SPOTIFY_URL_PARAMS.offset],
      url,
    });
    if (errorResponse) return errorResponse;
    return createMockSuccessResponse(
      spotifyListOfCurrentUsersPlaylistsResponse,
    );
  } else if (
    url.includes('/playlists') &&
    url.includes('/v1/users') &&
    options?.method === 'GET'
  ) {
    console.log('mock fetch spotify get user playlists');
    // get user's playlists
    const errorResponse = validateRequest({
      intendedMethod: 'GET',
      usedMethod: options?.method,
      intendedParams: [SPOTIFY_URL_PARAMS.limit, SPOTIFY_URL_PARAMS.offset],
      url,
    });
    if (errorResponse) return errorResponse;
    return createMockSuccessResponse(spotifyListOfUsersPlaylistsResponse);
  } else if (
    url.includes('/v1/users') &&
    url.includes('/playlists') &&
    options?.method === 'POST'
  ) {
    console.log('mock fetch spotify create playlist');
    // create playlist
    const errorResponse = validateRequest({
      intendedMethod: 'POST',
      usedMethod: options?.method,
      intendedParams: [],
      url,
      usedBody: options?.body,
      intendedBody: spotifyCreatePlaylistOptionsSample,
    });
    if (errorResponse) return errorResponse;
    return createMockSuccessResponse(spotifyCreatePlaylistResponse);
  } else if (
    url.includes('/v1/playlists') &&
    url.includes('/images') &&
    options?.method === 'PUT'
  ) {
    console.log('mock fetch spotify add cover image to playlist');
    // add cover image to playlist
    const errorResponse = validateRequest({
      intendedMethod: 'PUT',
      usedMethod: options?.method,
      intendedParams: [],
      url,
    });
    if (errorResponse) return errorResponse;
    return createMockSuccessResponse(null);
  }

  console.log('mock fetch spotify playlist not handled', url);
  return;
}
