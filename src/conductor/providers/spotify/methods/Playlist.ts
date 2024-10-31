import { makeRequest } from '../../../../utils';
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

export class Playlist {
  private apiKey: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  async getById(playlistId: TGetByIdInput): Promise<string> {
    const url = `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.playlists}${playlistId}`;
    return await makeRequest(url, this.apiKey, 'spotify');
  }

  async changeDetails(input: TChangePlaylistDetailsInput): Promise<void> {
    const { playlistId, details } = input;
    const url = `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.playlists}${playlistId}`;
    await makeRequest(url, this.apiKey, 'spotify', 'PUT', details);
  }

  async getItems({
    playlistId,
    tokens,
    market,
    fields,
    limit = 20,
    offset = 0,
    additional_types,
  }: TGetPlaylistItemsInput): Promise<any> {
    const url = new URL(
      `${SPOTIFY_API_BASE_URL}/${playlistId}/${SPOTIFY_METHODS_PATHS.tracks}`,
    );

    const params: Record<string, string | number> = {
      limit,
      offset,
    };

    if (market) params.market = market;
    if (fields) params.fields = fields;
    if (additional_types) params.additional_types = additional_types;

    Object.keys(params).forEach((key) =>
      url.searchParams.append(key, String(params[key])),
    );

    return makeRequest(url.toString(), tokens, 'spotify', 'GET');
  }

  async updatePlaylistItems({
    playlistId,
    options,
  }: TUpdatePlaylistItemsInput): Promise<string> {
    const url = `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.playlists}${playlistId}/tracks`;
    const body: Record<string, any> = {};

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

    const response = await makeRequest(
      url,
      this.apiKey,
      'spotify',
      'PUT',
      body,
    );
    return response.snapshot_id;
  }

  async addItemsToPlaylist({
    playlistId,
    uris,
    position,
  }: TAddItemsToPlaylistInput): Promise<string> {
    const url = `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.playlists}${playlistId}/tracks`;
    const body: Record<string, any> = { uris };

    if (position !== undefined) {
      body.position = position;
    }

    const response = await makeRequest(
      url,
      this.apiKey,
      'spotify',
      'POST',
      body,
    );
    return response.snapshot_id;
  }

  async removeItemsFromPlaylist({
    playlistId,
    tracks,
    snapshot_id,
  }: TRemoveItemsFromPlaylistInput): Promise<string> {
    const url = `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.playlists}${playlistId}/tracks`;
    const body: Record<string, any> = { tracks };

    if (snapshot_id) {
      body.snapshot_id = snapshot_id;
    }

    const response = await makeRequest(
      url,
      this.apiKey,
      'spotify',
      'DELETE',
      body,
    );
    return response.snapshot_id;
  }

  async getCurrentUserPlaylists({
    limit = 20,
    offset = 0,
  }: TGetCurrentUserPlaylistsInput): Promise<any> {
    const url = new URL(`${SPOTIFY_API_BASE_URL}/me/playlists`);

    const params: Record<string, string | number> = {
      limit,
      offset,
    };

    Object.keys(params).forEach((key) =>
      url.searchParams.append(key, String(params[key])),
    );

    return await makeRequest(url.toString(), this.apiKey, 'spotify');
  }

  async getUserPlaylists({
    userId,
    limit = 20,
    offset = 0,
  }: TGetUserPlaylistsInput): Promise<any> {
    const url = new URL(`${SPOTIFY_API_BASE_URL}/users/${userId}/playlists`);

    const params: Record<string, string | number> = {
      limit,
      offset,
    };

    Object.keys(params).forEach((key) =>
      url.searchParams.append(key, String(params[key])),
    );

    return await makeRequest(url.toString(), this.apiKey, 'spotify', 'GET');
  }

  async create({ userId, name, options }: TCreatePlaylistInput): Promise<any> {
    const url = `${SPOTIFY_API_BASE_URL}/users/${userId}/playlists`;
    const body: Record<string, any> = { name };

    if (options) {
      if (options.public !== undefined) body.public = options.public;
      if (options.collaborative !== undefined)
        body.collaborative = options.collaborative;
      if (options.description) body.description = options.description;
    }

    return await makeRequest(url, this.apiKey, 'spotify', 'POST', body);
  }

  async addCoverImage({
    playlistId,
    imageData,
  }: TAddCoverImageInput): Promise<void> {
    const url = `${SPOTIFY_API_BASE_URL}/playlists/${playlistId}/images`;

    await makeRequest(url, this.apiKey, 'spotify', 'PUT', imageData);
  }
}
