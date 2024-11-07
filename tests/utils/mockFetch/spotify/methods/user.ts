import {
  spotifyUserProfileResponse,
  spotifyCurrentUsersProfileResponse,
  spotifyUsersTopArtistsResponse,
  spotifyUsersTopTracksResponse,
  spotifyUserFollowsUsersOrArtistsResponse,
  spotifyUsersFollowPlaylistResponse,
} from '../../../mockData/spotify/responses/user';
import { SPOTIFY_URL_PARAMS } from '../constants';
import { createMockSuccessResponse, validateRequest } from '../../hepler';

export async function handleSpotifyUserMockRequests(
  url: string,
  options?: RequestInit,
) {
  // Users
  if (
    url.includes('/v1/users/') &&
    !url.includes('/followers') &&
    options?.method === 'GET'
  ) {
    console.log('mock request spotify user get by id');
    // get user by id
    const errorResponse = validateRequest({
      intendedMethod: 'GET',
      usedMethod: options?.method,
      intendedParams: [],
      url,
    });
    if (errorResponse) return errorResponse;
    return createMockSuccessResponse(spotifyUserProfileResponse);
  } else if (
    url.includes('/v1/me') &&
    !url.includes('top') &&
    !url.includes('following') &&
    options?.method === 'GET'
  ) {
    console.log('mock request spotify user get current user');
    // get current user
    const errorResponse = validateRequest({
      intendedMethod: 'GET',
      usedMethod: options?.method,
      intendedParams: [],
      url,
    });
    if (errorResponse) return errorResponse;
    return createMockSuccessResponse(spotifyCurrentUsersProfileResponse);
  } else if (url.includes('/v1/me/top/') && options?.method === 'GET') {
    console.log('mock request spotify user get top items');
    // get current user's top items
    const errorResponse = validateRequest({
      intendedMethod: 'GET',
      usedMethod: options?.method,
      intendedParams: [
        SPOTIFY_URL_PARAMS.time_range,
        SPOTIFY_URL_PARAMS.limit,
        SPOTIFY_URL_PARAMS.offset,
      ],
      url,
    });
    if (errorResponse) return errorResponse;
    if (url.includes('artists')) {
      console.log('mock request spotify user get top artists');
      return createMockSuccessResponse(spotifyUsersTopArtistsResponse);
    } else if (url.includes('tracks')) {
      console.log('mock request spotify user get top tracks');
      return createMockSuccessResponse(spotifyUsersTopTracksResponse);
    }
  } else if (
    url.includes('/v1/playlists/') &&
    url.includes('/followers') &&
    options?.method === 'PUT'
  ) {
    console.log('mock request spotify user follow playlist');
    // follow playlist
    const errorResponse = validateRequest({
      intendedMethod: 'PUT',
      usedMethod: options?.method,
      intendedParams: [],
      url,
    });
    if (errorResponse) return errorResponse;
    return createMockSuccessResponse(null);
  } else if (url.includes('/followers') && options?.method === 'DELETE') {
    console.log('mock request spotify user unfollow playlist');
    // unfollow playlist
    const errorResponse = validateRequest({
      intendedMethod: 'DELETE',
      usedMethod: options?.method,
      intendedParams: [],
      url,
    });
    if (errorResponse) return errorResponse;
    return createMockSuccessResponse(null);
  } else if (url.includes('/v1/me/following') && options?.method === 'PUT') {
    console.log('mock request spotify user follow artists or users');
    // follow artist
    const errorResponse = validateRequest({
      intendedMethod: 'PUT',
      usedMethod: options?.method,
      intendedParams: [SPOTIFY_URL_PARAMS.type],
      url,
    });
    if (errorResponse) return errorResponse;
    return createMockSuccessResponse(null);
  } else if (url.includes('/v1/me/following') && options?.method === 'DELETE') {
    console.log('mock request spotify user unfollow artists or users');
    // unfollow artist
    const errorResponse = validateRequest({
      intendedMethod: 'DELETE',
      usedMethod: options?.method,
      intendedParams: [SPOTIFY_URL_PARAMS.type],
      url,
    });
    if (errorResponse) return errorResponse;
    return createMockSuccessResponse(null);
  } else if (
    url.includes('/v1/me/following/contains') &&
    options?.method === 'GET'
  ) {
    console.log('mock request spotify user check if follows artists or users');
    // check if follows artists or users
    const errorResponse = validateRequest({
      intendedMethod: 'GET',
      usedMethod: options?.method,
      intendedParams: [SPOTIFY_URL_PARAMS.ids, SPOTIFY_URL_PARAMS.type],
      url,
    });
    if (errorResponse) return errorResponse;
    return createMockSuccessResponse(spotifyUserFollowsUsersOrArtistsResponse);
  } else if (
    url.includes('/v1/playlists/') &&
    url.includes('/followers/contains') &&
    options?.method === 'GET'
  ) {
    console.log('mock request spotify user check if follows playlist');
    // check if user follows playlist
    const errorResponse = validateRequest({
      intendedMethod: 'GET',
      usedMethod: options?.method,
      intendedParams: [],
      url,
    });
    if (errorResponse) return errorResponse;
    return createMockSuccessResponse(spotifyUsersFollowPlaylistResponse);
  }

  console.error('unhandled spotify user request', url);
}
