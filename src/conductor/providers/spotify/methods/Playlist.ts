import type { SpotifyConductorProvider } from '..';
import { SPOTIFY_API_BASE_URL, SPOTIFY_METHODS_PATHS } from '../constants';
import type {
  TGetByIdInput,
  TChangePlaylistDetailsInput,
  TGetPlaylistItemsInput,
  TUpdatePlaylistItemsInput,
  TAddItemsToPlaylistInput,
  TRemoveItemsFromPlaylistInput,
  TGetCurrentUserPlaylistsInput,
  TGetUserPlaylistsInput,
  TCreatePlaylistInput,
  TAddCoverImageInput,
} from '../types/input';

import type { SpotifyApi } from '../types/typed';

export class Playlist {
  private provider: SpotifyConductorProvider;

  constructor(provider: SpotifyConductorProvider) {
    this.provider = provider;
  }

  async getById(
    playlistId: TGetByIdInput,
  ): Promise<SpotifyApi.SinglePlaylistResponse> {
    let url = `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.playlists}${playlistId}`;
    url = this.provider.injectMarketIntoUrl(url);
    return await this.provider.makeRequest(url);
  }

  async changeDetails(input: TChangePlaylistDetailsInput): Promise<void> {
    const { playlistId, details } = input;
    const url = `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.playlists}${playlistId}`;
    return await this.provider.makeRequest(url, 'PUT', details);
  }

  async getItems({
    playlistId,
    fields,
    limit = 20,
    offset = 0,
    additional_types,
  }: TGetPlaylistItemsInput): Promise<SpotifyApi.PlaylistSnapshotResponse> {
    const url = new URL(
      `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.playlists}${playlistId}/${SPOTIFY_METHODS_PATHS.tracks}`,
    );

    const params: Record<string, string | number> = {
      limit,
      offset,
    };

    if (fields) params.fields = fields;
    if (additional_types) params.additional_types = additional_types;

    Object.keys(params).forEach((key) =>
      url.searchParams.append(key, String(params[key])),
    );

    const reqUrl = this.provider.injectMarketIntoUrl(url.toString());
    return await this.provider.makeRequest(reqUrl);
  }

  async updatePlaylistItems({
    playlistId,
    options,
  }: TUpdatePlaylistItemsInput): Promise<SpotifyApi.PlaylistSnapshotResponse> {
    const url = `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.playlists}${playlistId}/tracks`;
    const body: Record<string, any> = {};

    if (options) {
      if (options.uris) {
        body.uris = options.uris;
      } else {
        if (options.range_start !== undefined)
          body.range_start = options.range_start;
        if (options.insert_before !== undefined)
          body.insert_before = options.insert_before;
        if (options.range_length !== undefined)
          body.range_length = options.range_length;
        if (options.snapshot_id) body.snapshot_id = options.snapshot_id;
      }
    }

    return await this.provider.makeRequest(url, 'PUT', body);
  }

  async addItemsToPlaylist({
    playlistId,
    uris,
    position,
  }: TAddItemsToPlaylistInput): Promise<SpotifyApi.PlaylistSnapshotResponse> {
    const url = `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.playlists}${playlistId}/tracks`;
    const body: Record<string, any> = { uris };

    if (position !== undefined) {
      body.position = position;
    }

    return await this.provider.makeRequest(url, 'POST', body);
  }

  async removeItemsFromPlaylist({
    playlistId,
    tracks,
    snapshot_id,
  }: TRemoveItemsFromPlaylistInput): Promise<SpotifyApi.PlaylistSnapshotResponse> {
    const url = `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.playlists}${playlistId}/tracks`;
    const body: Record<string, any> = { tracks };

    if (snapshot_id) {
      body.snapshot_id = snapshot_id;
    }

    return await this.provider.makeRequest(url, 'DELETE', body);
  }

  async getCurrentUserPlaylists({
    limit = 20,
    offset = 0,
  }: TGetCurrentUserPlaylistsInput): Promise<SpotifyApi.ListOfCurrentUsersPlaylistsResponse> {
    const url = new URL(
      `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.current_user}${SPOTIFY_METHODS_PATHS.playlists}`,
    );

    const params: Record<string, string | number> = {
      limit,
      offset,
    };

    Object.keys(params).forEach((key) =>
      url.searchParams.append(key, String(params[key])),
    );

    return await this.provider.makeRequest(url.toString());
  }

  async getUserPlaylists({
    userId,
    limit = 20,
    offset = 0,
  }: TGetUserPlaylistsInput): Promise<SpotifyApi.ListOfUsersPlaylistsResponse> {
    const url = new URL(
      `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.users}${userId}${SPOTIFY_METHODS_PATHS.playlists}`,
    );

    const params: Record<string, string | number> = {
      limit,
      offset,
    };

    Object.keys(params).forEach((key) =>
      url.searchParams.append(key, String(params[key])),
    );

    return await this.provider.makeRequest(url.toString());
  }

  async create({
    userId,
    name,
    options,
  }: TCreatePlaylistInput): Promise<SpotifyApi.CreatePlaylistResponse> {
    const url = `${SPOTIFY_API_BASE_URL}/users/${userId}/playlists`;
    const body: Record<string, any> = { name };

    if (options) {
      if (options.public !== undefined) body.public = options.public;
      if (options.collaborative !== undefined)
        body.collaborative = options.collaborative;
      if (options.description) body.description = options.description;
    }

    return await this.provider.makeRequest(url, 'POST', body);
  }

  async addCoverImage({
    playlistId,
    imageData,
  }: TAddCoverImageInput): Promise<void> {
    const url = `${SPOTIFY_API_BASE_URL}/playlists/${playlistId}/images`;

    return await this.provider.makeRequest(url, 'PUT', imageData);
  }
}
