import type { SpotifyConductorProvider } from '..';
import { SPOTIFY_API_BASE_URL, SPOTIFY_METHODS_PATHS } from '../constants';
import type { TGetByIdInput } from '../types/input';
import type { SpotifyApi } from '../types/typed';

export class Album {
  private provider: SpotifyConductorProvider;

  constructor(provider: SpotifyConductorProvider) {
    this.provider = provider;
  }

  async getById(albumId: string): Promise<SpotifyApi.SingleAlbumResponse> {
    let url = `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.albums}${albumId}`;
    url = this.provider.injectMarketIntoUrl(url);
    return await this.provider.makeRequest(url);
  }

  async getSeveralById(
    albumIds: string[],
  ): Promise<SpotifyApi.MultipleAlbumsResponse> {
    let url = `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.albums}?ids=${encodeURIComponent(albumIds.join(','))}`;
    url = this.provider.injectMarketIntoUrl(url);
    return await this.provider.makeRequest(url);
  }

  async getTracks(albumId: string): Promise<SpotifyApi.AlbumTracksResponse> {
    let url = `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.albums}${albumId}/tracks`;
    url = this.provider.injectMarketIntoUrl(url);
    return await this.provider.makeRequest(url);
  }

  async getUsersSavedAlbums(): Promise<SpotifyApi.UsersSavedAlbumsResponse> {
    let url = `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.current_user}${SPOTIFY_METHODS_PATHS.albums}`;
    url = this.provider.injectMarketIntoUrl(url);
    return await this.provider.makeRequest(url);
  }

  async saveAlbumsForUser(albumIds: string[]): Promise<void> {
    const url = `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.current_user}${SPOTIFY_METHODS_PATHS.albums}`;
    return await this.provider.makeRequest(url, 'PUT', { ids: [albumIds] });
  }

  async removeAlbumForUser(albumId: string): Promise<void> {
    const url = `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.current_user}${SPOTIFY_METHODS_PATHS.albums}${albumId}`;
    return await this.provider.makeRequest(url, 'DELETE', { ids: [albumId] });
  }

  async checkUsersSavedAlbums(albumIds: string[]): Promise<boolean[]> {
    const url = `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.current_user}${SPOTIFY_METHODS_PATHS.albums}contains`;
    return await this.provider.makeRequest(url, 'GET', { ids: albumIds });
  }
}
