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

  /**
   * Fetches a playlist by its ID.
   *
   * @param playlistId - The ID of the playlist to fetch.
   * @param options - Additional options for the request.
   * @returns A promise that resolves to a SinglePlaylistResponse.
   */
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

  /**
   * Changes the details of a playlist.
   *
   * @param playlistId - The ID of the playlist to change details for.
   * @param options - The new details for the playlist.
   * @returns A promise that resolves when the playlist details are changed.
   */
  async changeDetails(
    playlistId: string,
    options: TPlaylistDetailsOptions,
  ): Promise<void> {
    const url = `${SPOTIFY_API_BASE_URL}playlists/${playlistId}`;
    return await this.provider.makeRequest(url, 'PUT', options);
  }

  /**
   * Fetches the items of a playlist.
   *
   * @param playlistId - The ID of the playlist to fetch items for.
   * @param options - Additional options for the request.
   * @returns A promise that resolves to a PlaylistTrackResponse.
   */
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

  /**
   * Updates the items of a playlist.
   *
   * @param playlistId - The ID of the playlist to update items for.
   * @param uris - An array of URIs to update the playlist with.
   * @param options - Additional options for the request.
   * @returns A promise that resolves to a PlaylistSnapshotResponse.
   */
  async updatePlaylistItems(
    playlistId: string,
    uris: string[],
    options: TUpdatePlaylistItemsOptions,
  ): Promise<SpotifyApi.PlaylistSnapshotResponse> {
    const url = `${SPOTIFY_API_BASE_URL}playlists/${playlistId}/tracks?uris=${encodeURIComponent(uris.join(','))}`;

    return await this.provider.makeRequest(url, 'PUT', options);
  }

  /**
   * Adds items to a playlist.
   *
   * @param playlistId - The ID of the playlist to add items to.
   * @param options - The items to add to the playlist.
   * @returns A promise that resolves to a PlaylistSnapshotResponse.
   */
  async addItemsToPlaylist(
    playlistId: string,
    options: TAddItemsToPlaylistOptions,
  ): Promise<SpotifyApi.PlaylistSnapshotResponse> {
    const url = `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.playlists}${playlistId}/tracks`;
    return await this.provider.makeRequest(url, 'POST', options);
  }

  /**
   * Removes items from a playlist.
   *
   * @param playlistId - The ID of the playlist to remove items from.
   * @param options - The items to remove from the playlist.
   * @returns A promise that resolves to a PlaylistSnapshotResponse.
   */
  async removeItemsFromPlaylist(
    playlistId: string,
    options: TRemoveItemsFromPlaylistOptions,
  ): Promise<SpotifyApi.PlaylistSnapshotResponse> {
    const url = `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.playlists}${playlistId}/tracks`;
    return await this.provider.makeRequest(url, 'DELETE', options);
  }

  /**
   * Fetches the current user's playlists.
   *
   * @param options - Additional options for the request.
   * @returns A promise that resolves to a ListOfCurrentUsersPlaylistsResponse.
   */
  async getCurrentUserPlaylists(
    options: TGetUserPlaylistsOptions,
  ): Promise<SpotifyApi.ListOfCurrentUsersPlaylistsResponse> {
    let url = `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.current_user}${SPOTIFY_METHODS_PATHS.playlists}`;
    url = this.provider.injectParamsIntoUrl(url, options);

    return await this.provider.makeRequest(url);
  }

  /**
   * Fetches a user's playlists.
   *
   * @param userId - The ID of the user to fetch playlists for.
   * @param options - Additional options for the request.
   * @returns A promise that resolves to a ListOfUsersPlaylistsResponse.
   */
  async getUserPlaylists(
    userId: string,
    options: TGetUserPlaylistsOptions,
  ): Promise<SpotifyApi.ListOfUsersPlaylistsResponse> {
    let url = `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.users}${userId}/playlists`;
    url = this.provider.injectParamsIntoUrl(url, options);

    return await this.provider.makeRequest(url);
  }

  /**
   * Creates a new playlist for a user.
   *
   * @param userId - The ID of the user to create the playlist for.
   * @param options - The options for creating the playlist.
   * @returns A promise that resolves to a CreatePlaylistResponse.
   */
  async create(
    userId: string,
    options: TCreatePlaylistOptions,
  ): Promise<SpotifyApi.CreatePlaylistResponse> {
    const url = `${SPOTIFY_API_BASE_URL}users/${userId}/playlists`;
    return await this.provider.makeRequest(url, 'POST', options);
  }

  /**
   * Adds a cover image to a playlist.
   *
   * @param playlistId - The ID of the playlist to add the cover image to.
   * @param imageData - The base64 encoded image data.
   * @returns A promise that resolves when the cover image is added.
   */
  async addCoverImage(playlistId: string, imageData: string): Promise<void> {
    const url = `${SPOTIFY_API_BASE_URL}playlists/${playlistId}/images`;

    return await this.provider.makeRequest(url, 'PUT', imageData);
  }
}
