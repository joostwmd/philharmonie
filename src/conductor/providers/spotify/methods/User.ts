import type { Spotify } from '..';
import { SPOTIFY_API_BASE_URL, SPOTIFY_METHODS_PATHS } from '../constants';
import type { TGetByIdInput, TFollowInput } from '../types/input';
import type {
  TGetUsersByIdResponse,
  TGetCurrentUserResponse,
  TGetUsersTopItemsResponse,
  TGetFollowedArtistsResponse,
} from '../types/response';

export class User {
  private provider: Spotify;

  constructor(provider: Spotify) {
    this.provider = provider;
  }

  async getUserById(userId: TGetByIdInput): Promise<TGetUsersByIdResponse> {
    const url = `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.users}${userId}`;
    return await this.provider.makeRequest(url);
  }

  async getCurrentUser(): Promise<TGetCurrentUserResponse> {
    const url = `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.current_user}`;
    return await this.provider.makeRequest(url);
  }

  async getCurrentUserTopItems(
    type: 'artists' | 'tracks',
  ): Promise<TGetUsersTopItemsResponse> {
    const url = `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.current_user}top/${type}`;
    return await this.provider.makeRequest(url);
  }

  async followPlaylist(playlistId: TGetByIdInput): Promise<void> {
    const url = `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.playlists}${playlistId}/followers`;
    return await this.provider.makeRequest(url, 'PUT');
  }

  async unfollowPlaylist(playlistId: TGetByIdInput): Promise<void> {
    const url = `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.playlists}${playlistId}/followers`;
    return await this.provider.makeRequest(url, 'DELETE');
  }

  async getFollowedArtists(): Promise<TGetFollowedArtistsResponse> {
    const url = `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.current_user}following?type=artist`;
    return await this.provider.makeRequest(url);
  }

  async followArtistsOrUsers({ type, ids }: TFollowInput): Promise<void> {
    const url = `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.current_user}following?type=${type}`;
    return await this.provider.makeRequest(url, 'PUT', { ids });
  }

  async unfollowArtistsOrUsers({ type, ids }: TFollowInput): Promise<void> {
    const url = `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.current_user}following?type=${type}`;
    return await this.provider.makeRequest(url, 'DELETE', { ids });
  }

  async checkIfFollowsArtistsOrUsers({
    type,
    ids,
  }: TFollowInput): Promise<boolean> {
    const url = `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.current_user}following/contains?type=${type}&ids=${encodeURIComponent(ids.join(','))}`;
    return await this.provider.makeRequest(url);
  }

  async checkIfFollowsPlaylist(playlistId: TGetByIdInput): Promise<[boolean]> {
    const url = `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.playlists}${playlistId}/followers/contains`;
    return await this.provider.makeRequest(url);
  }
}
