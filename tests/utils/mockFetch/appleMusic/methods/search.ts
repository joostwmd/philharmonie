import { appleMusicSearchCatalogResponse } from '../../../mockData/appleMusic/responses/search';
import { createMockSuccessResponse, validateRequest } from '../../hepler';

export function handleAppleMusicSearchMockRequest(
  url: string,
  options?: RequestInit,
) {
  if (url.includes('/v1/catalog') && url.includes('/search')) {
    // search for an item
    const errorResponse = validateRequest({
      intendedMethod: 'GET',
      usedMethod: options?.method,
      intendedParams: ['term', 'types'],
      url,
    });
    if (errorResponse) return errorResponse;
    return createMockSuccessResponse(appleMusicSearchCatalogResponse);
  }
}
