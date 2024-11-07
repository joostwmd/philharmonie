import { appleMusicSongResponse } from '../../../mockData/appleMusic/responses/song';
import { validateRequest, createMockSuccessResponse } from '../../hepler';
import { APPLE_MUSIC_URL_PARAMS } from '../costants';

export function handleAppleMusicSongMockRequests(
  url: string,
  options?: RequestInit,
) {
  if (
    url.includes('/v1/catalog') &&
    url.includes('/songs/') &&
    url.includes('?')
  ) {
    console.log('mock request apple music catalog song get by id');
    // get single catalog song by ID with query parameters
    const errorResponse = validateRequest({
      intendedMethod: 'GET',
      usedMethod: options?.method,
      intendedParams: [
        APPLE_MUSIC_URL_PARAMS.localization,
        APPLE_MUSIC_URL_PARAMS.include,
        APPLE_MUSIC_URL_PARAMS.extend,
      ],
      url,
    });
    if (errorResponse) return errorResponse;
    return createMockSuccessResponse(appleMusicSongResponse);
  } else if (
    url.includes('/v1/catalog') &&
    url.includes('/songs') &&
    url.includes('5Bisrc%5D')
  ) {
    console.log('mock request apple music catalog songs get by ISRC');
    // get multiple catalog songs by ISRC
    const errorResponse = validateRequest({
      intendedMethod: 'GET',
      usedMethod: options?.method,
      intendedParams: [
        APPLE_MUSIC_URL_PARAMS.filter_isrc,
        APPLE_MUSIC_URL_PARAMS.localization,
        APPLE_MUSIC_URL_PARAMS.include,
        APPLE_MUSIC_URL_PARAMS.extend,
      ],
      url,
    });
    if (errorResponse) return errorResponse;
    return createMockSuccessResponse(appleMusicSongResponse);
  } else if (
    url.includes('/v1/catalog') &&
    url.includes('/songs') &&
    url.includes('ids=')
  ) {
    console.log('mock request apple music catalog multiple songs get by ids');
    // get multiple catalog songs by IDs
    const errorResponse = validateRequest({
      intendedMethod: 'GET',
      usedMethod: options?.method,
      intendedParams: ['ids'],
      url,
    });
    if (errorResponse) return errorResponse;
    return createMockSuccessResponse(appleMusicSongResponse);
  } else if (url.includes('/v1/me/library/songs')) {
    console.log('mock request apple music get all users library songs');
    // get all library songs
    const errorResponse = validateRequest({
      intendedMethod: 'GET',
      usedMethod: options?.method,
      intendedParams: [
        APPLE_MUSIC_URL_PARAMS.localization,
        APPLE_MUSIC_URL_PARAMS.include,
        APPLE_MUSIC_URL_PARAMS.extend,
        APPLE_MUSIC_URL_PARAMS.limit,
        APPLE_MUSIC_URL_PARAMS.offset,
      ],
      url,
    });
    if (errorResponse) return errorResponse;
    return createMockSuccessResponse(appleMusicSongResponse);
  } else if (
    url.includes('/v1/me/library') &&
    url.includes('ids%5Btracks%5D') &&
    options?.method === 'POST'
  ) {
    console.log('mock request apple music add track to user library test file');
    // add track to user library
    const errorResponse = validateRequest({
      intendedMethod: 'POST',
      usedMethod: options?.method,
      intendedParams: [
        APPLE_MUSIC_URL_PARAMS.localization,
        APPLE_MUSIC_URL_PARAMS.ids_tracks,
      ],
      url,
    });
    if (errorResponse) return errorResponse;
    return createMockSuccessResponse(null);
  }

  console.error('mock request apple music song could not categorize');
}
