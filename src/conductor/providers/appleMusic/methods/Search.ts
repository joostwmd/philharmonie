import type { AppleMusicConductorProvider } from '..';
import { APPLE_MUSIC_BASE_URL, APPLE_MUSIC_METHODS_PATHS } from '../constants';
import type { SearchResultsResponse } from '../types/response';

export type TSearchCatalogItemInput = {
  term: string;
  types: string[];
  limit?: number;
  offset?: string;
  localization?: string;
  with?: string[];
};

export class Search {
  private provider: AppleMusicConductorProvider;

  constructor(provider: AppleMusicConductorProvider) {
    this.provider = provider;
  }

  async searchCatalog(
    input: TSearchCatalogItemInput,
  ): Promise<SearchResultsResponse> {
    const {
      term,
      types,
      limit = 5,
      offset,
      localization,
      with: withParam,
    } = input;

    let url = `${APPLE_MUSIC_BASE_URL}${APPLE_MUSIC_METHODS_PATHS.catalog}${this.provider.market}/${APPLE_MUSIC_METHODS_PATHS.search}`;

    const params: Record<string, string> = {
      term: term.replace(/\s+/g, '+'),
      types: types.join(','),
      limit: limit.toString(),
    };

    if (offset) params.offset = offset;
    if (localization) params.l = localization;
    if (withParam) params.with = withParam.join(',');

    url = this.provider.injectParamsIntoUrl(url, params);

    return await this.provider.makeRequest(url, 'GET');
  }
}
