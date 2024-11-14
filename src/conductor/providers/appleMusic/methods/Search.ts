import type { AppleMusicConductorProvider } from '..';
import { APPLE_MUSIC_BASE_URL, APPLE_MUSIC_METHODS_PATHS } from '../constants';
import type { SearchResultsResponse } from '../types/response';

type TSearchItemType =
  | 'activities'
  | 'albums'
  | 'apple-curators'
  | 'artists'
  | 'curators'
  | 'music-videos'
  | 'playlists'
  | 'record-labels'
  | 'songs'
  | 'stations';

export type TSearchCatalogItemInput = {
  term: string;
  types: TSearchItemType[];
  limit?: number;
  offset?: number;
  l?: string;
  with?: 'topResults';
};

export class Search {
  private provider: AppleMusicConductorProvider;

  constructor(provider: AppleMusicConductorProvider) {
    this.provider = provider;
  }

  /**
   * Searches the Apple Music catalog.
   *
   * @param input - The input data for the search.
   * @returns A promise that resolves to a SearchResultsResponse.
   */
  async searchCatalog(
    input: TSearchCatalogItemInput,
  ): Promise<SearchResultsResponse> {
    const { term, types, limit, offset, l, with: withParam } = input;

    let url = `${APPLE_MUSIC_BASE_URL}${APPLE_MUSIC_METHODS_PATHS.catalog}${this.provider.market}/${APPLE_MUSIC_METHODS_PATHS.search}`;

    const params: Record<string, string> = {
      term: term.replace(/\s+/g, '+'),
      types: types.join(','),
    };

    if (limit) params.limit = limit.toString();
    if (offset) params.offset = offset.toString();
    if (l) params.l = l;
    if (withParam) params.with = withParam;

    url = this.provider.injectParamsIntoUrl(url, params);
    console.log('search url', url);
    return await this.provider.makeRequest(url, 'GET');
  }
}
