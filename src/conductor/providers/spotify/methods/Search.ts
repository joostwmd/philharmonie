import type { SpotifyConductorProvider } from '..';
import { SPOTIFY_API_BASE_URL, SPOTIFY_METHODS_PATHS } from '../constants';
import type { TSearchInput } from '../types/input';
import type { SpotifyApi } from '../types/typed';

export class Search {
  private provider: SpotifyConductorProvider;

  constructor(provider: SpotifyConductorProvider) {
    this.provider = provider;
  }

  /**
   * Searches for an item in the Spotify catalog.
   *
   * @param input - The input data for the search.
   * @returns A promise that resolves to a SearchResponse.
   */
  async forItem(input: TSearchInput): Promise<SpotifyApi.SearchResponse> {
    const { query, type, limit, offset, include_external } = input;
    let url = `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.search}`;

    const params: Record<string, string | number> = {
      q: query,
      type: type.join(','),
    };

    if (limit !== undefined) params.limit = limit;
    if (offset !== undefined) params.offset = offset;
    if (include_external) params.include_external = include_external;

    url = this.provider.injectParamsIntoUrl(url.toString(), params);
    const reqUrl = this.provider.injectMarketIntoUrl(url.toString());
    return await this.provider.makeRequest(reqUrl);
  }
}
