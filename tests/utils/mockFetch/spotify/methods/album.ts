import {
  spotifyAlbumTracksResponse,
  spotifySeveralAlbumsResponse,
  spotifySingleAlbumResponse,
  spotifyUsersSavedAlbumsResponse,
} from '../../../mockData/spotify/responses/albums';
import { spotifyCheckUserSavedAlbumsResponse } from '../../../mockData/spotify/responses/track';
import { returnMockResponse } from '../../hepler';

export function handleSpotifyAlbumMockRequests(
  url: string,
  options?: RequestInit,
) {
  console.log('handleSpotifyAlbumMockRequests url', url);
  if (url.match(/\/v1\/albums\/[^/]+$/)) {
    // single album
    console.log('returning single album');
    const test = returnMockResponse(spotifySingleAlbumResponse);
    console.log('test', test);
    return returnMockResponse(spotifySingleAlbumResponse);
  } else if (url.includes('/v1/albums?ids=')) {
    // multiple albums
    returnMockResponse(spotifySeveralAlbumsResponse);
  } else if (url.match(/\/v1\/albums\/[^/]+\/tracks$/)) {
    // album tracks
    returnMockResponse(spotifyAlbumTracksResponse);
  } else if (url.includes('/v1/me/albums') && options?.method === 'GET') {
    // get user's saved albums
    returnMockResponse(spotifyUsersSavedAlbumsResponse);
  } else if (url.includes('/v1/me/albums?ids=') && options?.method === 'PUT') {
    // save albums for user
    returnMockResponse(null);
  } else if (
    url.includes('/v1/me/albums?ids=') &&
    options?.method === 'DELETE'
  ) {
    // remove albums for user
    returnMockResponse(null);
  } else if (url.includes('/v1/me/albums/contains?ids=')) {
    // check user's saved albums
    returnMockResponse(spotifyCheckUserSavedAlbumsResponse);
  }
}
