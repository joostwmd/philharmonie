import {
  spotifyUserProfileResponse,
  spotifyCurrentUsersProfileResponse,
  spotifyUsersTopArtistsResponse,
  spotifyUsersTopTracksResponse,
  spotifyUserFollowsUsersOrArtistsResponse,
  spotifyUsersFollowPlaylistResponse,
} from '../../../mockData/spotify/responses/user';
import { returnMockResponse } from '../../hepler';

export async function handleSpotifyUserMockRequests(
  url: string,
  options?: RequestInit,
) {
  // Users
  if (url.match(/\/v1\/users\/[^/]+$/) && options?.method === 'GET') {
    // get user by id
    return returnMockResponse(spotifyUserProfileResponse);
  } else if (url.includes('/v1/me') && options?.method === 'GET') {
    // get current user
    return returnMockResponse(spotifyCurrentUsersProfileResponse);
  } else if (
    url.match(/\/v1\/me\/top\/(artists|tracks)$/) &&
    options?.method === 'GET'
  ) {
    // get current user's top items
    if (url.includes('artists')) {
      return returnMockResponse(spotifyUsersTopArtistsResponse);
    } else if (url.includes('tracks')) {
      return returnMockResponse(spotifyUsersTopTracksResponse);
    }
  } else if (
    url.match(/\/v1\/playlists\/[^/]+\/followers$/) &&
    options?.method === 'PUT'
  ) {
    // follow playlist
    return returnMockResponse(null);
  } else if (
    url.match(/\/v1\/playlists\/[^/]+\/followers$/) &&
    options?.method === 'DELETE'
  ) {
    // unfollow playlist
    return returnMockResponse(null);
  } else if (
    url.includes('/v1/me/following?type=artist') &&
    options?.method === 'PUT'
  ) {
    // follow artist
    return returnMockResponse(null);
  } else if (
    url.includes('/v1/me/following?type=artist') &&
    options?.method === 'DELETE'
  ) {
    // unfollow artist
    return returnMockResponse(null);
  } else if (
    url.includes('/v1/me/following/contains?type=artist') &&
    options?.method === 'GET'
  ) {
    // check if follows artists or users
    return returnMockResponse(spotifyUserFollowsUsersOrArtistsResponse);
  } else if (
    url.match(/\/v1\/playlists\/[^/]+\/followers\/contains$/) &&
    options?.method === 'GET'
  ) {
    // check if user follows playlist
    return returnMockResponse(spotifyUsersFollowPlaylistResponse);
  }
}
