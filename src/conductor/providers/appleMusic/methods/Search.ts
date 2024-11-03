import type { AppleMusic } from '..';
import { APPLE_MUSIC_BASE_URL, APPLE_MUSIC_METHODS_PATHS } from '../constants';
import type { TSearchCatalogItemInput } from '../types/inputs';
import type { SearchResultsResponse } from '../types/response';

export class Search {
  private provider: AppleMusic;

  constructor(provider: AppleMusic) {
    this.provider = provider;
  }

  async searchCatalog(
    input: TSearchCatalogItemInput,
  ): Promise<SearchResultsResponse> {
    const {
      term,
      types,
      storefront,
      limit = 5,
      offset,
      localization,
      with: withParam,
    } = input;

    const url = new URL(
      `${APPLE_MUSIC_BASE_URL}${APPLE_MUSIC_METHODS_PATHS.catalog}${this.provider.market}/${APPLE_MUSIC_METHODS_PATHS.search}`,
    );

    const params: Record<string, string> = {
      term: term.replace(/\s+/g, '+'),
      types: types.join(','),
      limit: limit.toString(),
    };

    if (offset) params.offset = offset;
    if (localization) params.l = localization;
    if (withParam) params.with = withParam.join(',');

    Object.keys(params).forEach((key) => {
      if (params[key]) {
        url.searchParams.append(key, params[key]);
      }
    });

    return await this.provider.makeRequest(url.toString(), 'GET');
  }
}
