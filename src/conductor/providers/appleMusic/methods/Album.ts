import { makeRequest } from '../../../../utils';
import type { AppleMusicApiTokens } from '../../../Conductor';
import { APPLE_MUSIC_BASE_URL, APPLE_MUSIC_METHODS_PATHS } from '../constants';
import type { TGetMultipleAlbumsByUPCInput } from '../types/inputs';
import type { AlbumResponse } from '../types/response';

export class Album {
  private apiKeys: AppleMusicApiTokens;

  constructor(apiKeys: AppleMusicApiTokens) {
    this.apiKeys = apiKeys;
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

    return makeRequest(url.toString(), this.apiKeys, 'appleMusic', 'GET');
  }

  async getSavedAlbumsForUser(): Promise<AlbumResponse> {
    const url = `${APPLE_MUSIC_BASE_URL}/v1/me/library/albums`;
    return makeRequest(url, this.apiKeys, 'appleMusic', 'GET');
  }

  async saveAlbumsForUser(albumIds: string[]): Promise<void> {
    const url = `${APPLE_MUSIC_BASE_URL}/v1/me/library/albums`;
    await makeRequest(url, this.apiKeys, 'appleMusic', 'POST', {
      ids: albumIds,
    });
  }
}
