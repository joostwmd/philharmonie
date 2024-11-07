import { appleMusicMockAlbumIds } from '../../../mockData/appleMusic/input';
import { appleMusicAlbumResponse } from '../../../mockData/appleMusic/responses/album';
import { validateRequest, createMockSuccessResponse } from '../../hepler';
import { APPLE_MUSIC_URL_PARAMS } from '../costants';

export function handleAppleMusicAlbumMockRequests(
  url: string,
  options?: RequestInit,
) {
  console.log('handleAppleMusicAlbumMockRequests url', url);
  console.log('handleAppleMusicAlbumMockRequests options', options);

  if (url.includes('/v1/catalog') && url.includes('/albums')) {
    console.log('handleAppleMusicAlbumMockRequests get album by UPC');
    // get album by UPC
    const errorResponse = validateRequest({
      intendedMethod: 'GET',
      usedMethod: options?.method,
      intendedParams: [
        APPLE_MUSIC_URL_PARAMS['filter_upc'],
        APPLE_MUSIC_URL_PARAMS.include,
        APPLE_MUSIC_URL_PARAMS.extend,
        APPLE_MUSIC_URL_PARAMS.localization,
      ],
      url,
    });
    if (errorResponse) return errorResponse;
    return createMockSuccessResponse(appleMusicAlbumResponse);
  } else if (url.includes('/v1/me/library/albums')) {
    // get all saved albums
    const errorResponse = validateRequest({
      intendedMethod: 'GET',
      usedMethod: options?.method,
      intendedParams: [
        APPLE_MUSIC_URL_PARAMS.include,
        APPLE_MUSIC_URL_PARAMS.localization,
        APPLE_MUSIC_URL_PARAMS.limit,
        APPLE_MUSIC_URL_PARAMS.offset,
        APPLE_MUSIC_URL_PARAMS.extend,
      ],
      url,
    });
    if (errorResponse) return errorResponse;
    return createMockSuccessResponse(appleMusicAlbumResponse);
  } else if (url.includes('/v1/me/library') && options?.method === 'POST') {
    console.log('handleAppleMusicAlbumMockRequests save album for user');
    // save album for user
    const errorResponse = validateRequest({
      intendedMethod: 'POST',
      usedMethod: options?.method,
      intendedParams: [
        APPLE_MUSIC_URL_PARAMS.ids_albums,
        APPLE_MUSIC_URL_PARAMS.localization,
      ],
      url,
      usedBody: options?.body,
      intendedBody: {
        ids: appleMusicMockAlbumIds,
      },
    });
    if (errorResponse) return errorResponse;
    return createMockSuccessResponse(null);
  }

  console.log('handleAppleMusicAlbumMockRequests could not catch');
}
