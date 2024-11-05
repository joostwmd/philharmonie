import {
  spotifySinglePlaylistResponse,
  spotifyPlaylistSnapshotResponse,
  spotifyListOfCurrentUsersPlaylistsResponse,
  spotifyListOfUsersPlaylistsResponse,
  spotifyCreatePlaylistResponse,
} from '../../../mockData/spotify/responses/playlist';
import { returnMockResponse } from '../../hepler';

export async function handleSpotifyPlaylistMockRequests(
  url: string,
  options?: RequestInit,
) {
  // Playlists
  if (url.match(/\/v1\/playlists\/[^/]+$/) && options?.method === 'GET') {
    // get playlist by id
    return returnMockResponse(spotifySinglePlaylistResponse);
  } else if (
    url.match(/\/v1\/playlists\/[^/]+$/) &&
    options?.method === 'PUT'
  ) {
    // change playlist details
    return returnMockResponse(null);
  } else if (
    url.match(/\/v1\/playlists\/[^/]+\/tracks$/) &&
    options?.method === 'GET'
  ) {
    // get playlist items
    return returnMockResponse(spotifyPlaylistSnapshotResponse);
  } else if (
    url.match(/\/v1\/playlists\/[^/]+\/tracks$/) &&
    options?.method === 'PUT'
  ) {
    // update playlist items
    return returnMockResponse(spotifyPlaylistSnapshotResponse);
  } else if (
    url.match(/\/v1\/playlists\/[^/]+\/tracks$/) &&
    options?.method === 'POST'
  ) {
    // add items to playlist
    return returnMockResponse(spotifyPlaylistSnapshotResponse);
  } else if (
    url.match(/\/v1\/playlists\/[^/]+\/tracks$/) &&
    options?.method === 'DELETE'
  ) {
    // remove playlist items
    return returnMockResponse(spotifyPlaylistSnapshotResponse);
  } else if (url.includes('/v1/me/playlists') && options?.method === 'GET') {
    // get current user's playlists
    return returnMockResponse(spotifyListOfCurrentUsersPlaylistsResponse);
  } else if (
    url.match(/\/v1\/users\/[^/]+\/playlists$/) &&
    options?.method === 'GET'
  ) {
    // get user's playlists
    return returnMockResponse(spotifyListOfUsersPlaylistsResponse);
  } else if (
    url.match(/\/v1\/users\/[^/]+\/playlists$/) &&
    options?.method === 'POST'
  ) {
    // create playlist
    return returnMockResponse(spotifyCreatePlaylistResponse);
  } else if (
    url.match(/\/v1\/playlists\/[^/]+\/images$/) &&
    options?.method === 'PUT'
  ) {
    // add cover image to playlist
    return returnMockResponse(null);
  }
}
