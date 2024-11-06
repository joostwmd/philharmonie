import type { SpotifyConductorProvider } from '..';
import { SPOTIFY_API_BASE_URL, SPOTIFY_METHODS_PATHS } from '../constants';
import type {
  TGetUsersTopItemsOptions,
  TFollowArtistOrUserOptions,
} from '../types/input';
import type { SpotifyApi } from '../types/typed';

export class User {
  private provider: SpotifyConductorProvider;

  constructor(provider: SpotifyConductorProvider) {
    this.provider = provider;
  }

  async getUserById(userId: string): Promise<SpotifyApi.UserProfileResponse> {
    const url = `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.users}${userId}`;
    return await this.provider.makeRequest(url);
  }

  async getCurrentUser(): Promise<SpotifyApi.CurrentUsersProfileResponse> {
    const url = `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.current_user}`;
    return await this.provider.makeRequest(url);
  }

  async getCurrentUserTopItems(
    options: TGetUsersTopItemsOptions,
  ): Promise<
    SpotifyApi.UsersTopArtistsResponse | SpotifyApi.UsersTopTracksResponse
  > {
    const url = new URL(
      `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.current_user}top/${options.type}`,
    );

    const params: Record<string, string | number> = {};

    if (options.time_range) params.time_range = options.time_range;
    if (options.limit) params.limit = options.limit;
    if (options.offset) params.offset = options.offset;

    Object.keys(params).forEach((key) => {
      url.searchParams.append(key, String(params[key]));
    });

    return await this.provider.makeRequest(url.toString());
  }

  async followPlaylist(playlistId: string): Promise<void> {
    const url = `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.playlists}${playlistId}/followers`;
    return await this.provider.makeRequest(url, 'PUT');
  }

  async unfollowPlaylist(playlistId: string): Promise<void> {
    const url = `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.playlists}${playlistId}/followers`;
    return await this.provider.makeRequest(url, 'DELETE');
  }

  async getFollowedArtists(): Promise<SpotifyApi.UsersFollowedArtistsResponse> {
    const url = `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.current_user}following?type=artist`;
    return await this.provider.makeRequest(url);
  }

  async followArtistsOrUsers(
    options: TFollowArtistOrUserOptions,
  ): Promise<void> {
    const { type, ids } = options;
    const url = `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.current_user}following?type=${type}`;
    return await this.provider.makeRequest(url, 'PUT', { ids });
  }

  async unfollowArtistsOrUsers(
    options: TFollowArtistOrUserOptions,
  ): Promise<void> {
    const { type, ids } = options;
    const url = `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.current_user}following?type=${type}`;
    return await this.provider.makeRequest(url, 'DELETE', { ids });
  }

  async checkIfFollowsArtistsOrUsers(
    options: TFollowArtistOrUserOptions,
  ): Promise<SpotifyApi.UserFollowsUsersOrArtistsResponse> {
    const { type, ids } = options;
    const url = `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.current_user}following/contains?type=${type}&ids=${encodeURIComponent(ids.join(','))}`;
    return await this.provider.makeRequest(url);
  }

  async checkIfFollowsPlaylist(
    playlistId: string,
  ): Promise<SpotifyApi.UsersFollowPlaylistResponse> {
    const url = `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.playlists}${playlistId}/followers/contains`;
    return await this.provider.makeRequest(url);
  }
}
