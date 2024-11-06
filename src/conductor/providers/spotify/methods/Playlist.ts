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
  TFieldsAndAdditionalTypes,
} from '../types/input';

import type { SpotifyApi } from '../types/typed';

export class Playlist {
  private provider: SpotifyConductorProvider;

  constructor(provider: SpotifyConductorProvider) {
    this.provider = provider;
  }

  async getById(
    playlistId: string,
    options: TFieldsAndAdditionalTypes,
  ): Promise<SpotifyApi.SinglePlaylistResponse> {
    let url = `${SPOTIFY_API_BASE_URL}playlists/${playlistId}`;
    url = this.provider.injectMarketIntoUrl(url);

    const params: Record<string, string | number | undefined> = {
      fields: options.fields,
    };

    if (options.additional_types) {
      params.additional_types = options.additional_types.join(',');
    }

    url = this.provider.injectParamsIntoUrl(url, params);
    return await this.provider.makeRequest(url);
  }

  async changeDetails(
    playlistId: string,
    options: TPlaylistDetailsOptions,
  ): Promise<void> {
    const url = `${SPOTIFY_API_BASE_URL}playlists/${playlistId}`;
    return await this.provider.makeRequest(url, 'PUT', options);
  }

  async getItems(
    playlistId: string,
    options: TGetPlaylistItemsOptions,
  ): Promise<SpotifyApi.PlaylistTrackResponse> {
    let url = new URL(`${SPOTIFY_API_BASE_URL}playlists/${playlistId}/tracks`);

    const { limit, offset, fields, additional_types } = options;

    const params: Record<string, string | number | undefined> = {
      limit,
      offset,
      fields,
    };

    if (additional_types) {
      params.additional_types = additional_types.join(',');
    }

    url = new URL(this.provider.injectParamsIntoUrl(url.toString(), params));
    const reqUrl = this.provider.injectMarketIntoUrl(url.toString());
    return await this.provider.makeRequest(reqUrl);
  }

  async updatePlaylistItems(
    playlistId: string,
    uris: string[],
    options: TUpdatePlaylistItemsOptions,
  ): Promise<SpotifyApi.PlaylistSnapshotResponse> {
    const url = `${SPOTIFY_API_BASE_URL}playlists/${playlistId}/tracks?uris=${encodeURIComponent(uris.join(','))}`;

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
    let url = `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.current_user}${SPOTIFY_METHODS_PATHS.playlists}`;
    url = this.provider.injectParamsIntoUrl(url, options);

    return await this.provider.makeRequest(url);
  }

  async getUserPlaylists(
    userId: string,
    options: TGetUserPlaylistsOptions,
  ): Promise<SpotifyApi.ListOfUsersPlaylistsResponse> {
    let url = `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.users}${userId}/playlists`;
    url = this.provider.injectParamsIntoUrl(url, options);

    return await this.provider.makeRequest(url);
  }

  async create(
    userId: string,
    options: TCreatePlaylistOptions,
  ): Promise<SpotifyApi.CreatePlaylistResponse> {
    const url = `${SPOTIFY_API_BASE_URL}users/${userId}/playlists`;
    return await this.provider.makeRequest(url, 'POST', options);
  }

  async addCoverImage(playlistId: string, imageData: string): Promise<void> {
    const url = `${SPOTIFY_API_BASE_URL}playlists/${playlistId}/images`;

    return await this.provider.makeRequest(url, 'PUT', imageData);
  }
}
