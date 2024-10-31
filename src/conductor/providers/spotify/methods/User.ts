import { makeRequest } from '../../../../utils';
import { SPOTIFY_API_BASE_URL, SPOTIFY_METHODS_PATHS } from '../constants';
import type { TGetByIdInput, TFollowInput } from '../types/input';

export class User {
  private apiToken: string;

  constructor(apiToken: string) {
    this.apiToken = apiToken;
  }

  async getUserById(userId: TGetByIdInput): Promise<string> {
    const url = `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.users}${userId}`;
    return makeRequest(url, this.apiToken, 'spotify');
  }

  async getCurrentUser(): Promise<string> {
    const url = `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.current_user}`;
    return makeRequest(url, this.apiToken, 'spotify');
  }

  async getCurrentUserTopItems(type: 'artists' | 'tracks'): Promise<string> {
    const url = `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.current_user}top/${type}`;
    return makeRequest(url, this.apiToken, 'spotify');
  }

  async followPlaylist(playlistId: TGetByIdInput): Promise<void> {
    const url = `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.playlists}${playlistId}/followers`;
    await makeRequest(url, this.apiToken, 'spotify', 'PUT');
  }

  async unfollowPlaylist(playlistId: TGetByIdInput): Promise<void> {
    const url = `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.playlists}${playlistId}/followers`;
    await makeRequest(url, this.apiToken, 'spotify', 'DELETE');
  }

  async getFollowedArtists(): Promise<string> {
    const url = `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.current_user}following?type=artist`;
    return makeRequest(url, this.apiToken, 'spotify');
  }

  async followArtistsOrUsers({ type, ids }: TFollowInput): Promise<void> {
    const url = `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.current_user}following?type=${type}`;
    await makeRequest(url, this.apiToken, 'spotify', 'PUT', { ids });
  }

  async unfollowArtistsOrUsers({ type, ids }: TFollowInput): Promise<void> {
    const url = `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.current_user}following?type=${type}`;
    await makeRequest(url, this.apiToken, 'spotify', 'DELETE', { ids });
  }

  async checkIfFollowsArtistsOrUsers({
    type,
    ids,
  }: TFollowInput): Promise<boolean> {
    const url = `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.current_user}following/contains?type=${type}&ids=${encodeURIComponent(ids.join(','))}`;
    return makeRequest(url, this.apiToken, 'spotify');
  }

  async checkIfFollowsPlaylist(playlistId: TGetByIdInput): Promise<boolean> {
    const url = `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.playlists}${playlistId}/followers/contains`;
    return makeRequest(url, this.apiToken, 'spotify');
  }
}
