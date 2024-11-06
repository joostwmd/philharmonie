import type { SpotifyConductorProvider } from '..';
import { SPOTIFY_API_BASE_URL, SPOTIFY_METHODS_PATHS } from '../constants';
import type { TLimitAndOffsetOptions } from '../types/input';
import type { SpotifyApi } from '../types/typed';

export class Album {
  private provider: SpotifyConductorProvider;

  constructor(provider: SpotifyConductorProvider) {
    this.provider = provider;
  }

  async getById(albumId: string): Promise<SpotifyApi.SingleAlbumResponse> {
    let url = `${SPOTIFY_API_BASE_URL}albums/${albumId}`;
    url = this.provider.injectMarketIntoUrl(url);
    return await this.provider.makeRequest(url);
  }

  async getSeveralById(
    albumIds: string[],
  ): Promise<SpotifyApi.MultipleAlbumsResponse> {
    let url = `${SPOTIFY_API_BASE_URL}albums?ids=${encodeURIComponent(albumIds.join(','))}`;
    url = this.provider.injectMarketIntoUrl(url);
    return await this.provider.makeRequest(url);
  }

  async getTracks(
    albumId: string,
    options: TLimitAndOffsetOptions,
  ): Promise<SpotifyApi.AlbumTracksResponse> {
    let url = `${SPOTIFY_API_BASE_URL}albums/${albumId}/tracks`;
    url = this.provider.injectMarketIntoUrl(url);
    url = this.provider.injectParamsIntoUrl(url, options);
    return await this.provider.makeRequest(url);
  }

  async getUsersSavedAlbums(
    options: TLimitAndOffsetOptions,
  ): Promise<SpotifyApi.UsersSavedAlbumsResponse> {
    let url = `${SPOTIFY_API_BASE_URL}me/albums`;
    url = this.provider.injectMarketIntoUrl(url);
    url = this.provider.injectParamsIntoUrl(url, options);
    return await this.provider.makeRequest(url);
  }

  async saveAlbumsForUser(albumIds: string[]): Promise<void> {
    const url = `${SPOTIFY_API_BASE_URL}me/albums`;
    return await this.provider.makeRequest(url, 'PUT', { ids: albumIds });
  }

  async removeAlbumsForUser(albumIds: string[]): Promise<void> {
    const url = `${SPOTIFY_API_BASE_URL}me/albums`;
    return await this.provider.makeRequest(url, 'DELETE', { ids: [albumIds] });
  }

  async checkUsersSavedAlbums(albumIds: string[]): Promise<boolean[]> {
    const url = `${SPOTIFY_API_BASE_URL}me/albums/contains?ids=${encodeURIComponent(albumIds.join(','))}`;
    return await this.provider.makeRequest(url);
  }
}
