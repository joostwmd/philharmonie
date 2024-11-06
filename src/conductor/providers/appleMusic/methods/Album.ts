import type { AppleMusicConductorProvider } from '..';
import { APPLE_MUSIC_BASE_URL, APPLE_MUSIC_METHODS_PATHS } from '../constants';
import type { AlbumResponse } from '../types/response';

type TGetAlbumsByUPCOptions = {
  localization?: string;
  include?: string;
  extend?: string;
};

export type TGetSavedAlbumsForUserOptions = {
  include?: string;
  l?: string;
  limit?: number;
  offset?: string;
  extend?: string;
};

export type TSaveAlbumsForUserOptions = {
  localization?: string;
};

export class Album {
  private provider: AppleMusicConductorProvider;

  constructor(provider: AppleMusicConductorProvider) {
    this.provider = provider;
  }

  async getMultipleByUPC(
    upcs: string[],
    options: TGetAlbumsByUPCOptions,
  ): Promise<AlbumResponse> {
    let url = `${APPLE_MUSIC_BASE_URL}${APPLE_MUSIC_METHODS_PATHS.catalog}/${this.provider.market}/albums`;
    const params: Record<string, string> = {
      ...options,
      'filter[upc]': upcs.join(','),
    };

    url = this.provider.injectParamsIntoUrl(url, params);
    return await this.provider.makeRequest(url.toString());
  }

  async getSavedAlbumsForUser(
    options: TGetSavedAlbumsForUserOptions,
  ): Promise<AlbumResponse> {
    let url = `${APPLE_MUSIC_BASE_URL}/v1/me/library/albums`;
    const params: Record<string, string | number> = { ...options };

    url = this.provider.injectParamsIntoUrl(url, params);
    return await this.provider.makeRequest(url.toString());
  }

  async saveAlbumsForUser(
    albumIds: string[],
    options: TSaveAlbumsForUserOptions,
  ): Promise<void> {
    let url = `${APPLE_MUSIC_BASE_URL}/v1/me/library`;
    const params: Record<string, string> = {
      'ids[albums]': albumIds.join(','),
    };

    if (options.localization) {
      params.l = options.localization;
    }

    url = this.provider.injectParamsIntoUrl(url, params);
    return await this.provider.makeRequest(url, 'POST');
  }
}
