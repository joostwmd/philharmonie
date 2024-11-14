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

  /**
   * Fetches a user by their ID.
   *
   * @param userId - The ID of the user to fetch.
   * @returns A promise that resolves to a UserProfileResponse.
   */
  async getById(userId: string): Promise<SpotifyApi.UserProfileResponse> {
    const url = `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.users}${userId}`;
    return await this.provider.makeRequest(url);
  }

  /**
   * Fetches the current user's profile.
   *
   * @returns A promise that resolves to a CurrentUsersProfileResponse.
   */
  async getCurrentUser(): Promise<SpotifyApi.CurrentUsersProfileResponse> {
    const url = `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.current_user}`;
    return await this.provider.makeRequest(url);
  }

  /**
   * Fetches the current user's top items (artists or tracks).
   *
   * @param options - Additional options for the request.
   * @returns A promise that resolves to a UsersTopArtistsResponse or UsersTopTracksResponse.
   */
  async getCurrentUserTopItems(
    options: TGetUsersTopItemsOptions,
  ): Promise<
    SpotifyApi.UsersTopArtistsResponse | SpotifyApi.UsersTopTracksResponse
  > {
    console.log('options', options);

    let url = `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.current_user}top/${options.type}`;

    const params: Record<string, string | number> = {};

    if (options.limit !== undefined) {
      params.limit = options.limit;
    }
    if (options.offset !== undefined) {
      params.offset = options.offset;
    }
    if (options.time_range) {
      params.time_range = options.time_range;
    }

    url = this.provider.injectParamsIntoUrl(url, params);
    return await this.provider.makeRequest(url);
  }

  /**
   * Follows artists or users.
   *
   * @param options - The options for following artists or users.
   * @returns A promise that resolves when the follow action is complete.
   */
  async followArtistsOrUsers(
    options: TFollowArtistOrUserOptions,
  ): Promise<void> {
    const url = `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.current_user}following`;
    return await this.provider.makeRequest(url, 'PUT', options);
  }

  /**
   * Unfollows artists or users.
   *
   * @param options - The options for unfollowing artists or users.
   * @returns A promise that resolves when the unfollow action is complete.
   */
  async unfollowArtistsOrUsers(
    options: TFollowArtistOrUserOptions,
  ): Promise<void> {
    const url = `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.current_user}following`;
    return await this.provider.makeRequest(url, 'DELETE', options);
  }

  /**
   * Checks if the current user follows specific artists or users.
   *
   * @param type - The type of entity to check (artist or user).
   * @param ids - An array of IDs to check.
   * @returns A promise that resolves to an array of booleans indicating whether each entity is followed.
   */
  async checkCurrentUserFollows(
    type: 'artist' | 'user',
    ids: string[],
  ): Promise<boolean[]> {
    const url = `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.current_user}following/contains?type=${type}&ids=${encodeURIComponent(
      ids.join(','),
    )}`;
    return await this.provider.makeRequest(url);
  }
}
