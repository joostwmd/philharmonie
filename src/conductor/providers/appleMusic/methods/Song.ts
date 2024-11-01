import { makeRequest } from '../../../../utils';
import type { AppleMusicApiTokens } from '../../../Conductor';
import { APPLE_MUSIC_BASE_URL, APPLE_MUSIC_METHODS_PATHS } from '../constants';
import type { SongResponse } from '../types/response';

export class Song {
  private apiTokens: AppleMusicApiTokens;

  constructor(apiTokens: AppleMusicApiTokens) {
    this.apiTokens = apiTokens;
  }

  async getCatalogSongById(id: string): Promise<SongResponse> {
    const url = `${APPLE_MUSIC_BASE_URL}${APPLE_MUSIC_METHODS_PATHS.catalog}${'us/'}${APPLE_MUSIC_METHODS_PATHS.songs}${id}`;
    return await makeRequest(url, this.apiTokens, 'appleMusic');
  }

  async getSeveralCatalogSongsByIds(ids: string[]): Promise<SongResponse> {
    if (ids.length > 25) {
      throw new Error('The maximum number of IDs is 25');
    }

    const url = `${APPLE_MUSIC_BASE_URL}${APPLE_MUSIC_METHODS_PATHS.catalog}${'us/'}${APPLE_MUSIC_METHODS_PATHS.songs}?ids=${ids.join(',')}`;
    return await makeRequest(url, this.apiTokens, 'appleMusic');
  }

  async getMultipleByISRC(
    storefront: string,
    isrcs: string[],
    localization?: string,
  ): Promise<SongResponse> {
    const url = new URL(
      `${APPLE_MUSIC_BASE_URL}${APPLE_MUSIC_METHODS_PATHS.catalog}/${storefront}/songs`,
    );

    const params: Record<string, string> = {
      'filter[isrc]': isrcs.join(','),
    };

    if (localization) params.l = localization;

    Object.keys(params).forEach((key) =>
      url.searchParams.append(key, params[key]!),
    );

    return makeRequest(url.toString(), this.apiTokens, 'appleMusic', 'GET');
  }

  async getSavedTracks(
    limit: number = 20,
    offset: string = '0',
    localization?: string,
  ): Promise<SongResponse> {
    const url = new URL(`${APPLE_MUSIC_BASE_URL}/v1/me/library/songs`);

    const params: Record<string, string> = {
      limit: limit.toString(),
      offset,
    };

    if (localization) params.l = localization;

    Object.keys(params).forEach((key) =>
      url.searchParams.append(key, params[key]!),
    );

    return makeRequest(url.toString(), this.apiTokens, 'appleMusic', 'GET');
  }

  async saveTracksForUser(
    trackIds: string[],
    localization?: string,
  ): Promise<void> {
    const url = new URL(`${APPLE_MUSIC_BASE_URL}/v1/me/library`);

    const params: Record<string, string> = {
      'ids[tracks]': trackIds.join(','),
    };

    if (localization) params.l = localization;

    Object.keys(params).forEach((key) =>
      url.searchParams.append(key, params[key]!),
    );

    await makeRequest(url.toString(), this.apiTokens, 'appleMusic', 'POST');
  }
}
