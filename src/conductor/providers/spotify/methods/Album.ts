import type { Spotify } from '..';
import { SPOTIFY_API_BASE_URL, SPOTIFY_METHODS_PATHS } from '../constants';
import type { TGetByIdInput } from '../types/input';
import type {
  TGetAlbumByIdResponse,
  TGetAlbumTracksResponse,
  TGetSeveralAlbumsByIdsResponse,
  TGetUsersSavedAlbumsResponse,
} from '../types/response';

export class Album {
  private provider: Spotify;

  constructor(provider: Spotify) {
    this.provider = provider;
  }

  async getById(albumId: TGetByIdInput): Promise<TGetAlbumByIdResponse> {
    let url = `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.albums}${albumId}`;
    url = this.provider.injectMarketIntoUrl(url);
    return await this.provider.makeRequest(url);
  }

  async getSeveralById(
    albumIds: TGetByIdInput[],
  ): Promise<TGetSeveralAlbumsByIdsResponse> {
    let url = `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.albums}?ids=${encodeURIComponent(albumIds.join(','))}`;
    url = this.provider.injectMarketIntoUrl(url);
    return await this.provider.makeRequest(url);
  }

  async getTracks(albumId: TGetByIdInput): Promise<TGetAlbumTracksResponse> {
    let url = `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.albums}${albumId}/tracks`;
    url = this.provider.injectMarketIntoUrl(url);
    return await this.provider.makeRequest(url);
  }

  async getUsersSavedAlbums(): Promise<TGetUsersSavedAlbumsResponse> {
    let url = `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.current_user}${SPOTIFY_METHODS_PATHS.albums}`;
    url = this.provider.injectMarketIntoUrl(url);
    return await this.provider.makeRequest(url);
  }

  async saveAlbumsForUser(albumIds: string[]): Promise<void> {
    const url = `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.current_user}${SPOTIFY_METHODS_PATHS.albums}`;
    return await this.provider.makeRequest(url, 'PUT', { ids: [albumIds] });
  }

  async removeAlbumForUser(albumId: TGetByIdInput): Promise<void> {
    const url = `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.current_user}${SPOTIFY_METHODS_PATHS.albums}${albumId}`;
    return await this.provider.makeRequest(url, 'DELETE', { ids: [albumId] });
  }

  async checkUsersSavedAlbums(albumIds: TGetByIdInput[]): Promise<boolean[]> {
    const url = `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.current_user}${SPOTIFY_METHODS_PATHS.albums}contains`;
    return await this.provider.makeRequest(url, 'GET', { ids: albumIds });
  }
}
