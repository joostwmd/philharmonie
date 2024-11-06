import {
  spotifyUserProfileResponse,
  spotifyCurrentUsersProfileResponse,
  spotifyUsersTopArtistsResponse,
  spotifyUsersTopTracksResponse,
  spotifyUserFollowsUsersOrArtistsResponse,
  spotifyUsersFollowPlaylistResponse,
} from '../../../mockData/spotify/responses/user';
import { SPOTIFY_URL_PARAMS } from '../../constants';
import { createMockSuccessResponse, validateRequest } from '../../hepler';

export async function handleSpotifyUserMockRequests(
  url: string,
  options?: RequestInit,
) {
  // Users
  if (url.match(/\/v1\/users\/[^/]+$/) && options?.method === 'GET') {
    // get user by id
    const errorResponse = validateRequest('GET', options?.method, [], url);
    if (errorResponse) return errorResponse;
    return createMockSuccessResponse(spotifyUserProfileResponse);
  } else if (url.includes('/v1/me') && options?.method === 'GET') {
    // get current user
    const errorResponse = validateRequest('GET', options?.method, [], url);
    if (errorResponse) return errorResponse;
    return createMockSuccessResponse(spotifyCurrentUsersProfileResponse);
  } else if (
    url.match(/\/v1\/me\/top\/(artists|tracks)$/) &&
    options?.method === 'GET'
  ) {
    // get current user's top items
    const errorResponse = validateRequest(
      'GET',
      options?.method,
      [
        SPOTIFY_URL_PARAMS.type,
        SPOTIFY_URL_PARAMS.time_range,
        SPOTIFY_URL_PARAMS.limit,
        SPOTIFY_URL_PARAMS.offset,
      ],
      url,
    );
    if (errorResponse) return errorResponse;
    if (url.includes('artists')) {
      return createMockSuccessResponse(spotifyUsersTopArtistsResponse);
    } else if (url.includes('tracks')) {
      return createMockSuccessResponse(spotifyUsersTopTracksResponse);
    }
  } else if (
    url.match(/\/v1\/playlists\/[^/]+\/followers$/) &&
    options?.method === 'PUT'
  ) {
    // follow playlist
    const errorResponse = validateRequest('PUT', options?.method, [], url);
    if (errorResponse) return errorResponse;
    return createMockSuccessResponse(null);
  } else if (
    url.match(/\/v1\/playlists\/[^/]+\/followers$/) &&
    options?.method === 'DELETE'
  ) {
    // unfollow playlist
    const errorResponse = validateRequest('DELETE', options?.method, [], url);
    if (errorResponse) return errorResponse;
    return createMockSuccessResponse(null);
  } else if (url.includes('/v1/me/following') && options?.method === 'PUT') {
    // follow artist
    const errorResponse = validateRequest(
      'PUT',
      options?.method,
      [SPOTIFY_URL_PARAMS.type],
      url,
    );
    if (errorResponse) return errorResponse;
    return createMockSuccessResponse(null);
  } else if (url.includes('/v1/me/following') && options?.method === 'DELETE') {
    // unfollow artist
    const errorResponse = validateRequest(
      'DELETE',
      options?.method,
      [SPOTIFY_URL_PARAMS.type],
      url,
    );
    if (errorResponse) return errorResponse;
    return createMockSuccessResponse(null);
  } else if (
    url.includes('/v1/me/following/contains') &&
    options?.method === 'GET'
  ) {
    // check if follows artists or users
    const errorResponse = validateRequest(
      'GET',
      options?.method,
      [SPOTIFY_URL_PARAMS.ids, SPOTIFY_URL_PARAMS.type],
      url,
    );
    if (errorResponse) return errorResponse;
    return createMockSuccessResponse(spotifyUserFollowsUsersOrArtistsResponse);
  } else if (
    url.match(/\/v1\/playlists\/[^/]+\/followers\/contains$/) &&
    options?.method === 'GET'
  ) {
    // check if user follows playlist
    const errorResponse = validateRequest('GET', options?.method, [], url);
    if (errorResponse) return errorResponse;
    return createMockSuccessResponse(spotifyUsersFollowPlaylistResponse);
  }
}
