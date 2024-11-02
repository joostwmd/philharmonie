import type { AppleMusic } from '..';
import { APPLE_MUSIC_BASE_URL, APPLE_MUSIC_METHODS_PATHS } from '../constants';
import type { StorefrontResponse } from '../types/response';

export class User {
  private provider: AppleMusic;

  constructor(provider: AppleMusic) {
    this.provider = provider;
  }

  async getStorefron(): Promise<StorefrontResponse> {
    const url = `${APPLE_MUSIC_BASE_URL}${APPLE_MUSIC_METHODS_PATHS.current_user}storefront`;
    return await this.provider.makeRequest(url);
  }
}
