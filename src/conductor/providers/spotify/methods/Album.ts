import type { SpotifyConductorProvider } from '..';
import { SPOTIFY_API_BASE_URL } from '../constants';
import type { TLimitAndOffsetOptions } from '../types/input';
import type { SpotifyApi } from '../types/typed';

export class Album {
  private provider: SpotifyConductorProvider;

  constructor(provider: SpotifyConductorProvider) {
    this.provider = provider;
  }

  /**
   * Fetches multiple albums by their UPCs.
   *
   * @param upcs - An array of UPCs to fetch albums for.
   * @param options - Additional options for the request.
   * @returns A promise that resolves to an AlbumResponse.
   */
  async getMultipleByUPC(
    upcs: string[],
    options: any,
  ): Promise<SpotifyApi.AlbumObjectFull> {
    let url = `${SPOTIFY_API_BASE_URL}albums`;
    const params: Record<string, string> = {
      ...options,
      'filter[upc]': upcs.join(','),
    };

    url = this.provider.injectParamsIntoUrl(url, params);
    return await this.provider.makeRequest(url);
  }

  /**
   * Fetches the saved albums for the current user.
   *
   * @param options - Additional options for the request.
   * @returns A promise that resolves to a UsersSavedAlbumsResponse.
   */
  async getUsersSavedAlbums(
    options: TLimitAndOffsetOptions,
  ): Promise<SpotifyApi.UsersSavedAlbumsResponse> {
    let url = `${SPOTIFY_API_BASE_URL}me/albums`;
    url = this.provider.injectMarketIntoUrl(url);
    url = this.provider.injectParamsIntoUrl(url, options);
    return await this.provider.makeRequest(url);
  }

  /**
   * Saves albums for the current user.
   *
   * @param albumIds - An array of album IDs to save.
   * @returns A promise that resolves when the albums are saved.
   */
  async saveAlbumsForUser(albumIds: string[]): Promise<void> {
    const url = `${SPOTIFY_API_BASE_URL}me/albums`;
    return await this.provider.makeRequest(url, 'PUT', { ids: albumIds });
  }

  /**
   * Removes albums for the current user.
   *
   * @param albumIds - An array of album IDs to remove.
   * @returns A promise that resolves when the albums are removed.
   */
  async removeAlbumsForUser(albumIds: string[]): Promise<void> {
    const url = `${SPOTIFY_API_BASE_URL}me/albums`;
    return await this.provider.makeRequest(url, 'DELETE', { ids: albumIds });
  }

  /**
   * Checks if the current user has saved specific albums.
   *
   * @param albumIds - An array of album IDs to check.
   * @returns A promise that resolves to an array of booleans indicating whether each album is saved.
   */
  async checkUsersSavedAlbums(albumIds: string[]): Promise<boolean[]> {
    const url = `${SPOTIFY_API_BASE_URL}me/albums/contains?ids=${encodeURIComponent(albumIds.join(','))}`;
    return await this.provider.makeRequest(url);
  }
}
