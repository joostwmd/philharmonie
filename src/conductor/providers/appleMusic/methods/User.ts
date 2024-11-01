import { makeRequest } from '../../../../utils';
import type { AppleMusicApiTokens } from '../../../Conductor';
import { APPLE_MUSIC_BASE_URL, APPLE_MUSIC_METHODS_PATHS } from '../constants';
import type { StorefrontResponse } from '../types/response';

export class User {
  private apiTokens: AppleMusicApiTokens;

  constructor(apiTokens: AppleMusicApiTokens) {
    this.apiTokens = apiTokens;
  }

  async getStorefron(): Promise<StorefrontResponse> {
    const url = `${APPLE_MUSIC_BASE_URL}${APPLE_MUSIC_METHODS_PATHS.current_user}storefront`;
    return await makeRequest(url, this.apiTokens, 'appleMusic');
  }
}
