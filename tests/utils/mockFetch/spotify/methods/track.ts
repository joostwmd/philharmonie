import {
  spotifySingleTrackResponse,
  spotifyMultipleTracksResponse,
  spotifyUsersSavedTracksResponse,
  spotifyCheckUserSavedAlbumsResponse,
  spotifyAudioFeaturesResponse,
  spotifyMultipleAudioFeaturesResponse,
  spotifyRecommendationsResponse,
} from '../../../mockData/spotify/responses/track';
import { SPOTIFY_URL_PARAMS } from '../constants';
import { createMockSuccessResponse, validateRequest } from '../../hepler';

export async function handleSpotifyTrackMockRequests(
  url: string,
  options?: RequestInit,
) {
  // Tracks
  if (
    url.includes('/v1/tracks/') &&
    !url.includes('/audio-features/') &&
    !url.includes('?ids=') &&
    options?.method === 'GET'
  ) {
    console.log('mock request spotify single track');
    // get track by id
    const errorResponse = validateRequest({
      intendedMethod: 'GET',
      usedMethod: options?.method,
      intendedParams: [SPOTIFY_URL_PARAMS.market],
      url,
    });
    if (errorResponse) return errorResponse;
    return createMockSuccessResponse(spotifySingleTrackResponse);
  } else if (url.includes('/v1/tracks?ids=') && options?.method === 'GET') {
    console.log('mock request spotify mutiple track');
    // get multiple tracks by ids
    const errorResponse = validateRequest({
      intendedMethod: 'GET',
      usedMethod: options?.method,
      intendedParams: [SPOTIFY_URL_PARAMS.market, SPOTIFY_URL_PARAMS.ids],
      url,
    });
    if (errorResponse) return errorResponse;
    return createMockSuccessResponse(spotifyMultipleTracksResponse);
  } else if (
    url.includes('/v1/me/tracks') &&
    !url.includes('/contains') &&
    options?.method === 'GET'
  ) {
    console.log('mock request spotify user saved tracks');
    // get user's saved tracks
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
    return createMockSuccessResponse(spotifyUsersSavedTracksResponse);
  } else if (
    url.includes('/v1/me/tracks') &&
    !url.includes('/contains') &&
    options?.method === 'PUT'
  ) {
    console.log('mock request spotify save tracks');
    // save tracks for user
    const errorResponse = validateRequest({
      intendedMethod: 'PUT',
      usedMethod: options?.method,
      intendedParams: [],
      url,
    });
    if (errorResponse) return errorResponse;
    return createMockSuccessResponse(null);
  } else if (url.includes('/v1/me/tracks') && options?.method === 'DELETE') {
    console.log('mock request spotify remove tracks');
    // remove tracks for user
    const errorResponse = validateRequest({
      intendedMethod: 'DELETE',
      usedMethod: options?.method,
      intendedParams: [],
      url,
    });
    if (errorResponse) return errorResponse;
    return createMockSuccessResponse(null);
  } else if (
    url.includes('/v1/me/tracks/contains?ids=') &&
    options?.method === 'GET'
  ) {
    console.log('mock request spotify check user saved tracks');
    // check user's saved tracks
    const errorResponse = validateRequest({
      intendedMethod: 'GET',
      usedMethod: options?.method,
      intendedParams: [SPOTIFY_URL_PARAMS.ids],
      url,
    });
    if (errorResponse) return errorResponse;
    return createMockSuccessResponse(spotifyCheckUserSavedAlbumsResponse);
  } else if (
    url.includes('/v1/audio-features/') &&
    !url.includes('?ids=') &&
    options?.method === 'GET'
  ) {
    console.log('mock request spotify audio features');
    // get track audio features
    const errorResponse = validateRequest({
      intendedMethod: 'GET',
      usedMethod: options?.method,
      intendedParams: [],
      url,
    });
    if (errorResponse) return errorResponse;
    return createMockSuccessResponse(spotifyAudioFeaturesResponse);
  } else if (
    url.includes('/v1/audio-features?ids=') &&
    options?.method === 'GET'
  ) {
    console.log('mock request spotify multiple audio features');
    // get multiple audio features
    const errorResponse = validateRequest({
      intendedMethod: 'GET',
      usedMethod: options?.method,
      intendedParams: [SPOTIFY_URL_PARAMS.ids],
      url,
    });
    if (errorResponse) return errorResponse;
    return createMockSuccessResponse(spotifyMultipleAudioFeaturesResponse);
  } else if (url.includes('/v1/recommendations') && options?.method === 'GET') {
    console.log('mock request spotify recommendations');
    // get recommendations
    const errorResponse = validateRequest({
      intendedMethod: 'GET',
      usedMethod: options?.method,
      intendedParams: [
        SPOTIFY_URL_PARAMS.limit,
        SPOTIFY_URL_PARAMS.market,
        SPOTIFY_URL_PARAMS.seed_artists,
        SPOTIFY_URL_PARAMS.seed_genres,
        SPOTIFY_URL_PARAMS.seed_tracks,
        SPOTIFY_URL_PARAMS.min_acousticness,
        SPOTIFY_URL_PARAMS.max_acousticness,
        SPOTIFY_URL_PARAMS.target_acousticness,
        SPOTIFY_URL_PARAMS.min_danceability,
        SPOTIFY_URL_PARAMS.max_danceability,
        SPOTIFY_URL_PARAMS.target_danceability,
        SPOTIFY_URL_PARAMS.min_duration_ms,
        SPOTIFY_URL_PARAMS.max_duration_ms,
        SPOTIFY_URL_PARAMS.target_duration_ms,
        SPOTIFY_URL_PARAMS.min_energy,
        SPOTIFY_URL_PARAMS.max_energy,
        SPOTIFY_URL_PARAMS.target_energy,
        SPOTIFY_URL_PARAMS.min_instrumentalness,
        SPOTIFY_URL_PARAMS.max_instrumentalness,
        SPOTIFY_URL_PARAMS.target_instrumentalness,
        SPOTIFY_URL_PARAMS.min_key,
        SPOTIFY_URL_PARAMS.max_key,
        SPOTIFY_URL_PARAMS.target_key,
        SPOTIFY_URL_PARAMS.min_liveness,
        SPOTIFY_URL_PARAMS.max_liveness,
        SPOTIFY_URL_PARAMS.target_liveness,
        SPOTIFY_URL_PARAMS.min_loudness,
        SPOTIFY_URL_PARAMS.max_loudness,
        SPOTIFY_URL_PARAMS.target_loudness,
        SPOTIFY_URL_PARAMS.min_mode,
        SPOTIFY_URL_PARAMS.max_mode,
        SPOTIFY_URL_PARAMS.target_mode,
        SPOTIFY_URL_PARAMS.min_popularity,
        SPOTIFY_URL_PARAMS.max_popularity,
        SPOTIFY_URL_PARAMS.target_popularity,
        SPOTIFY_URL_PARAMS.min_speechiness,
        SPOTIFY_URL_PARAMS.max_speechiness,
        SPOTIFY_URL_PARAMS.target_speechiness,
        SPOTIFY_URL_PARAMS.min_tempo,
        SPOTIFY_URL_PARAMS.max_tempo,
        SPOTIFY_URL_PARAMS.target_tempo,
        SPOTIFY_URL_PARAMS.min_time_signature,
        SPOTIFY_URL_PARAMS.max_time_signature,
        SPOTIFY_URL_PARAMS.target_time_signature,
        SPOTIFY_URL_PARAMS.min_valence,
        SPOTIFY_URL_PARAMS.max_valence,
        SPOTIFY_URL_PARAMS.target_valence,
      ],
      url,
    });
    if (errorResponse) return errorResponse;
    return createMockSuccessResponse(spotifyRecommendationsResponse);
  }
  console.log('mock request spotify track not found');
}
