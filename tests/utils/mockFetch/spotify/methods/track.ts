import {
  spotifySingleTrackResponse,
  spotifyMultipleTracksResponse,
  spotifyUsersSavedTracksResponse,
  spotifyCheckUserSavedAlbumsResponse,
  spotifyAudioFeaturesResponse,
  spotifyMultipleAudioFeaturesResponse,
  spotifyRecommendationsResponse,
} from '../../../mockData/spotify/responses/track';
import { returnMockResponse } from '../../hepler';

export async function handleSpotifyTrackMockRequests(
  url: string,
  options?: RequestInit,
) {
  // Tracks
  if (url.match(/\/v1\/tracks\/[^/]+$/) && options?.method === 'GET') {
    // get track by id
    return returnMockResponse(spotifySingleTrackResponse);
  } else if (url.includes('/v1/tracks?ids=') && options?.method === 'GET') {
    // get multiple tracks by ids
    return returnMockResponse(spotifyMultipleTracksResponse);
  } else if (url.includes('/v1/me/tracks') && options?.method === 'GET') {
    // get user's saved tracks
    return returnMockResponse(spotifyUsersSavedTracksResponse);
  } else if (url.includes('/v1/me/tracks?ids=') && options?.method === 'PUT') {
    // save tracks for user
    return returnMockResponse(null);
  } else if (
    url.includes('/v1/me/tracks?ids=') &&
    options?.method === 'DELETE'
  ) {
    // remove tracks for user
    return returnMockResponse(null);
  } else if (
    url.includes('/v1/me/tracks/contains?ids=') &&
    options?.method === 'GET'
  ) {
    // check user's saved tracks
    return returnMockResponse(spotifyCheckUserSavedAlbumsResponse);
  } else if (
    url.match(/\/v1\/audio-features\/[^/]+$/) &&
    options?.method === 'GET'
  ) {
    // get track audio features
    return returnMockResponse(spotifyAudioFeaturesResponse);
  } else if (
    url.includes('/v1/audio-features?ids=') &&
    options?.method === 'GET'
  ) {
    // get multiple audio features
    return returnMockResponse(spotifyMultipleAudioFeaturesResponse);
  } else if (url.includes('/v1/recommendations') && options?.method === 'GET') {
    // get recommendations
    return returnMockResponse(spotifyRecommendationsResponse);
  }
}
