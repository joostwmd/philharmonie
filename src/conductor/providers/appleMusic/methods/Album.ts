import type { SpotifyConductorProvider } from '../../spotify';
import { SPOTIFY_API_BASE_URL } from '../../spotify/constants';
import type { TLimitAndOffsetOptions } from '../../spotify/types/input';
import type { SpotifyApi } from '../../spotify/types/typed';

export class Album {
  private provider: SpotifyConductorProvider;

  constructor(provider: SpotifyConductorProvider) {
    this.provider = provider;
  }

  /**
   * Fetches an album by its ID.
   *
   * @param albumId - The ID of the album to fetch.
   * @returns A promise that resolves to a SingleAlbumResponse.
   */
  async getById(albumId: string): Promise<SpotifyApi.SingleAlbumResponse> {
    let url = `${SPOTIFY_API_BASE_URL}albums/${albumId}`;
    url = this.provider.injectMarketIntoUrl(url);
    return await this.provider.makeRequest(url);
  }

  /**
   * Fetches several albums by their IDs.
   *
   * @param albumIds - An array of album IDs to fetch.
   * @returns A promise that resolves to a MultipleAlbumsResponse.
   */
  async getSeveralById(
    albumIds: string[],
  ): Promise<SpotifyApi.MultipleAlbumsResponse> {
    let url = `${SPOTIFY_API_BASE_URL}albums?ids=${encodeURIComponent(albumIds.join(','))}`;
    url = this.provider.injectMarketIntoUrl(url);
    return await this.provider.makeRequest(url);
  }

  /**
   * Fetches the tracks of an album by its ID.
   *
   * @param albumId - The ID of the album to fetch tracks for.
   * @param options - Additional options for the request.
   * @returns A promise that resolves to an AlbumTracksResponse.
   */
  async getTracks(
    albumId: string,
    options: TLimitAndOffsetOptions,
  ): Promise<SpotifyApi.AlbumTracksResponse> {
    let url = `${SPOTIFY_API_BASE_URL}albums/${albumId}/tracks`;
    url = this.provider.injectMarketIntoUrl(url);
    url = this.provider.injectParamsIntoUrl(url, options);
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
