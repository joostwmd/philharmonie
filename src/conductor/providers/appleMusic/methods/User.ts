import type { AppleMusicConductorProvider } from '..';
import { APPLE_MUSIC_BASE_URL, APPLE_MUSIC_METHODS_PATHS } from '../constants';
import type { StorefrontResponse } from '../types/response';

export type TGetStorefrontOptions = {
  l?: string;
  limit?: number;
  include?: string[];
  offset?: string;
  extend?: string[];
};

export class User {
  private provider: AppleMusicConductorProvider;

  constructor(provider: AppleMusicConductorProvider) {
    this.provider = provider;
  }

  async getStorefront(
    options: TGetStorefrontOptions = {},
  ): Promise<StorefrontResponse> {
    let url = `${APPLE_MUSIC_BASE_URL}${APPLE_MUSIC_METHODS_PATHS.current_user}storefront`;
    const params: Record<string, string | number> = {};

    if (options.l) {
      params.l = options.l;
    }
    if (options.limit !== undefined) {
      params.limit = options.limit;
    }
    if (options.include) {
      params.include = options.include.join(',');
    }
    if (options.offset) {
      params.offset = options.offset;
    }
    if (options.extend) {
      params.extend = options.extend.join(',');
    }

    url = this.provider.injectParamsIntoUrl(url, params);
    return await this.provider.makeRequest(url);
  }
}
