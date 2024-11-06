import type { SpotifyConductorProvider } from '..';
import { SPOTIFY_API_BASE_URL, SPOTIFY_METHODS_PATHS } from '../constants';
import type { TSearchInput } from '../types/input';
import type { SpotifyApi } from '../types/typed';

export class Search {
  private provider: SpotifyConductorProvider;

  constructor(provider: SpotifyConductorProvider) {
    this.provider = provider;
  }

  async forItem(input: TSearchInput): Promise<SpotifyApi.SearchResponse> {
    const { query, type, limit, offset, include_external } = input;
    const url = new URL(
      `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.search}`,
    );

    const params: Record<string, string | number> = {};

    params.q = query;
    params.type = type.join(',');
    if (limit) params.limit = limit;
    if (offset) params.offset = offset;
    if (include_external) params.include_external = include_external;

    Object.keys(params).forEach((key) =>
      url.searchParams.append(key, String(params[key])),
    );

    const reqUrl = this.provider.injectMarketIntoUrl(url.toString());
    return await this.provider.makeRequest(reqUrl);
  }
}
