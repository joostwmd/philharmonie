import type { AppleMusicConductorProvider } from '..';
import { APPLE_MUSIC_BASE_URL, APPLE_MUSIC_METHODS_PATHS } from '../constants';
import type { SongResponse } from '../types/response';

export type TGetCatalogSongByIdOptions = {
  localization?: string;
  include?: string[];
  extend?: string[];
};

export type TGetSeveralCatalogSongsByIdsOptions = {
  localization?: string;
  include?: string[];
  extend?: string[];
};

export type TGetMultipleByISRCOptions = {
  localization?: string;
  include?: string[];
  extend?: string[];
};

export type TGetSavedTracksOptions = {
  include?: string[];
  localization?: string;
  limit?: number;
  offset?: string;
  extend?: string[];
};

export class Song {
  private provider: AppleMusicConductorProvider;

  constructor(provider: AppleMusicConductorProvider) {
    this.provider = provider;
  }

  async getCatalogSongById(
    id: string,
    options: TGetCatalogSongByIdOptions,
  ): Promise<SongResponse> {
    let url = `${APPLE_MUSIC_BASE_URL}${APPLE_MUSIC_METHODS_PATHS.catalog}${this.provider.market}/${APPLE_MUSIC_METHODS_PATHS.songs}${id}`;
    const params: Record<string, string> = {};

    if (options.localization) {
      params.l = options.localization;
    }
    if (options.include) {
      params.include = options.include.join(',');
    }
    if (options.extend) {
      params.extend = options.extend.join(',');
    }

    url = this.provider.injectParamsIntoUrl(url, params);
    return await this.provider.makeRequest(url);
  }

  async getSeveralCatalogSongsByIds(
    ids: string[],
    options: TGetSeveralCatalogSongsByIdsOptions,
  ): Promise<SongResponse> {
    let url = `${APPLE_MUSIC_BASE_URL}${APPLE_MUSIC_METHODS_PATHS.catalog}${this.provider.market}/${APPLE_MUSIC_METHODS_PATHS.songs}`;
    const params: Record<string, string> = {
      ids: ids.join(','),
    };

    if (options.localization) {
      params.l = options.localization;
    }
    if (options.include) {
      params.include = options.include.join(',');
    }
    if (options.extend) {
      params.extend = options.extend.join(',');
    }

    url = this.provider.injectParamsIntoUrl(url, params);
    return await this.provider.makeRequest(url);
  }

  async getMultipleByISRC(
    isrcs: string[],
    options: TGetMultipleByISRCOptions,
  ): Promise<SongResponse> {
    let url = `${APPLE_MUSIC_BASE_URL}${APPLE_MUSIC_METHODS_PATHS.catalog}/${this.provider.market}/songs`;
    const params: Record<string, string> = {
      'filter[isrc]': isrcs.join(','),
    };

    if (options.localization) {
      params.l = options.localization;
    }
    if (options.include) {
      params.include = options.include.join(',');
    }
    if (options.extend) {
      params.extend = options.extend.join(',');
    }

    url = this.provider.injectParamsIntoUrl(url, params);
    return await this.provider.makeRequest(url);
  }

  async getSavedTracks(options: TGetSavedTracksOptions): Promise<SongResponse> {
    let url = `${APPLE_MUSIC_BASE_URL}/v1/me/library/songs`;
    const params: Record<string, string | number> = {};

    if (options.include) {
      params.include = options.include.join(',');
    }
    if (options.extend) {
      params.extend = options.extend.join(',');
    }
    if (options.localization) {
      params.l = options.localization;
    }
    if (options.limit !== undefined) {
      params.limit = options.limit;
    }
    if (options.offset) {
      params.offset = options.offset;
    }

    url = this.provider.injectParamsIntoUrl(url, params);
    return await this.provider.makeRequest(url);
  }

  async saveTracksForUser(
    trackIds: string[],
    localization?: string,
  ): Promise<void> {
    let url = `${APPLE_MUSIC_BASE_URL}/v1/me/library`;
    const params: Record<string, string> = {
      'ids[tracks]': trackIds.join(','),
    };

    if (localization) {
      params.l = localization;
    }

    url = this.provider.injectParamsIntoUrl(url, params);
    await this.provider.makeRequest(url, 'POST');
  }
}
