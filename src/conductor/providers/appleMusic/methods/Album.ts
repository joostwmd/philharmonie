import type { AppleMusic } from '..';
import { APPLE_MUSIC_BASE_URL, APPLE_MUSIC_METHODS_PATHS } from '../constants';
import type { TGetMultipleAlbumsByUPCInput } from '../types/inputs';
import type { AlbumResponse } from '../types/response';

export class Album {
  private provider: AppleMusic;

  constructor(provider: AppleMusic) {
    this.provider = provider;
  }

  async getMultipleByUPC(
    input: TGetMultipleAlbumsByUPCInput,
  ): Promise<AlbumResponse> {
    const { storefront, upcs, localization } = input;

    const url = new URL(
      `${APPLE_MUSIC_BASE_URL}${APPLE_MUSIC_METHODS_PATHS.catalog}/${storefront}/albums`,
    );

    const params: Record<string, string> = {
      'filter[upc]': upcs.join(','),
    };

    if (localization) params.l = localization;

    Object.keys(params).forEach((key) =>
      url.searchParams.append(key, params[key]!),
    );

    return await this.provider.makeRequest(url.toString());
  }

  async getSavedAlbumsForUser(): Promise<AlbumResponse> {
    const url = `${APPLE_MUSIC_BASE_URL}/v1/me/library/albums`;
    return await this.provider.makeRequest(url);
  }

  async saveAlbumsForUser(albumIds: string[]): Promise<void> {
    const url = `${APPLE_MUSIC_BASE_URL}/v1/me/library/albums`;
    return await this.provider.makeRequest(url, 'POST', { ids: albumIds });
  }
}
