import type { SpotifyConductorProvider } from '..';
import { SPOTIFY_API_BASE_URL, SPOTIFY_METHODS_PATHS } from '../constants';
import type {
  TPlaylistDetailsOptions,
  TGetPlaylistItemsOptions,
  TUpdatePlaylistItemsOptions,
  TAddItemsToPlaylistOptions,
  TRemoveItemsFromPlaylistOptions,
  TGetUserPlaylistsOptions,
  TCreatePlaylistOptions,
} from '../types/input';

import type { SpotifyApi } from '../types/typed';

export class Playlist {
  private provider: SpotifyConductorProvider;

  constructor(provider: SpotifyConductorProvider) {
    this.provider = provider;
  }

  async getById(
    playlistId: string,
  ): Promise<SpotifyApi.SinglePlaylistResponse> {
    let url = `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.playlists}${playlistId}`;
    url = this.provider.injectMarketIntoUrl(url);
    return await this.provider.makeRequest(url);
  }

  async changeDetails(
    playlistId: string,
    options: TPlaylistDetailsOptions,
  ): Promise<void> {
    const url = `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.playlists}${playlistId}`;
    return await this.provider.makeRequest(url, 'PUT', options);
  }

  async getItems(
    playlistId: string,
    options: TGetPlaylistItemsOptions,
  ): Promise<SpotifyApi.PlaylistSnapshotResponse> {
    const url = new URL(
      `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.playlists}${playlistId}/${SPOTIFY_METHODS_PATHS.tracks}`,
    );

    const { limit, offset, fields, additional_types } = options;

    const params: Record<string, string | number> = {};

    if (limit !== undefined) params.limit = limit;
    if (offset !== undefined) params.offset = offset;
    if (fields) params.fields = fields;
    if (additional_types) params.additional_types = additional_types;

    Object.keys(params).forEach((key) =>
      url.searchParams.append(key, String(params[key])),
    );

    const reqUrl = this.provider.injectMarketIntoUrl(url.toString());
    return await this.provider.makeRequest(reqUrl);
  }

  async updatePlaylistItems(
    playlistId: string,
    options: TUpdatePlaylistItemsOptions,
  ): Promise<SpotifyApi.PlaylistSnapshotResponse> {
    const url = `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.playlists}${playlistId}/tracks`;
    return await this.provider.makeRequest(url, 'PUT', options);
  }

  async addItemsToPlaylist(
    playlistId: string,
    options: TAddItemsToPlaylistOptions,
  ): Promise<SpotifyApi.PlaylistSnapshotResponse> {
    const url = `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.playlists}${playlistId}/tracks`;
    return await this.provider.makeRequest(url, 'POST', options);
  }

  async removeItemsFromPlaylist(
    playlistId: string,
    options: TRemoveItemsFromPlaylistOptions,
  ): Promise<SpotifyApi.PlaylistSnapshotResponse> {
    const url = `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.playlists}${playlistId}/tracks`;
    return await this.provider.makeRequest(url, 'DELETE', options);
  }

  async getCurrentUserPlaylists(
    options: TGetUserPlaylistsOptions,
  ): Promise<SpotifyApi.ListOfCurrentUsersPlaylistsResponse> {
    const url = new URL(
      `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.current_user}${SPOTIFY_METHODS_PATHS.playlists}`,
    );

    const { limit, offset } = options;

    const params: Record<string, string | number> = {};

    if (limit !== undefined) params.limit = limit;
    if (offset !== undefined) params.offset = offset;

    Object.keys(params).forEach((key) =>
      url.searchParams.append(key, String(params[key])),
    );

    return await this.provider.makeRequest(url.toString());
  }

  async getUserPlaylists(
    userId: string,
    options: TGetUserPlaylistsOptions,
  ): Promise<SpotifyApi.ListOfUsersPlaylistsResponse> {
    const url = new URL(
      `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.users}${userId}${SPOTIFY_METHODS_PATHS.playlists}`,
    );

    const { limit, offset } = options;

    const params: Record<string, string | number> = {};

    if (limit !== undefined) params.limit = limit;
    if (offset !== undefined) params.offset = offset;

    Object.keys(params).forEach((key) =>
      url.searchParams.append(key, String(params[key])),
    );

    return await this.provider.makeRequest(url.toString());
  }

  async create(
    userId: string,
    options: TCreatePlaylistOptions,
  ): Promise<SpotifyApi.CreatePlaylistResponse> {
    const url = `${SPOTIFY_API_BASE_URL}/users/${userId}/playlists`;
    return await this.provider.makeRequest(url, 'POST', options);
  }

  async addCoverImage(playlistId: string, imageData: string): Promise<void> {
    const url = `${SPOTIFY_API_BASE_URL}/playlists/${playlistId}/images`;

    return await this.provider.makeRequest(url, 'PUT', imageData);
  }
}
