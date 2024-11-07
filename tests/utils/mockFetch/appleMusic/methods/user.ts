import { appleMusicStorefrontResponse } from '../../../mockData/appleMusic/responses/user';
import { createMockSuccessResponse, validateRequest } from '../../hepler';
import { APPLE_MUSIC_URL_PARAMS } from '../costants';

export function handleAppleMusicUserMockRequests(
  url: string,
  options?: RequestInit,
) {
  if (url.includes('/v1/me/storefront')) {
    // get user's storefront
    const errorResponse = validateRequest({
      intendedMethod: 'GET',
      usedMethod: options?.method,
      intendedParams: [
        APPLE_MUSIC_URL_PARAMS.limit,
        APPLE_MUSIC_URL_PARAMS.localization,
        APPLE_MUSIC_URL_PARAMS.include,
        APPLE_MUSIC_URL_PARAMS.offset,
        APPLE_MUSIC_URL_PARAMS.extend,
      ],
      url,
    });
    if (errorResponse) return errorResponse;
    return createMockSuccessResponse(appleMusicStorefrontResponse);
  }
}
