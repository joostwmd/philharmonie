import type { SpotifyConductorProvider } from '..';
import { SPOTIFY_API_BASE_URL, SPOTIFY_METHODS_PATHS } from '../constants';
import type { TSearchInput } from '../types/input';
import type { TSearchResponse } from '../types/response';

export class Search {
  private provider: SpotifyConductorProvider;

  constructor(provider: SpotifyConductorProvider) {
    this.provider = provider;
  }

  async forItem(input: TSearchInput): Promise<TSearchResponse> {
    const {
      query,
      type,
      market,
      limit = 20,
      offset = 0,
      include_external,
    } = input;
    const url = new URL(
      `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.search}`,
    );

    const params: Record<string, string | number> = {
      query,
      type: type.join(','),
      limit,
      offset,
    };

    if (market) params.market = market;
    if (include_external) params.include_external = include_external;

    Object.keys(params).forEach((key) =>
      url.searchParams.append(key, String(params[key])),
    );

    const reqUrl = this.provider.injectMarketIntoUrl(url.toString());
    return await this.provider.makeRequest(reqUrl);
  }
}
