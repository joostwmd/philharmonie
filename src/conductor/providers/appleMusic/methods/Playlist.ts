import type { AppleMusicConductorProvider } from '..';
import { APPLE_MUSIC_BASE_URL, APPLE_MUSIC_METHODS_PATHS } from '../constants';
import type {
  TAddTracksToPlaylistInput,
  TCreatePlaylistInput,
} from '../types/inputs';
import type { PlaylistResponse, SongResponse } from '../types/response';

export type TGetLibraryPlaylistByIdOptions = {
  l?: string;
  include?: string;
  extend?: string;
};

export type TGetCurrentUserPlaylistsOptions = {
  include?: string;
  l?: string;
  limit?: number;
  offset?: string;
  extend?: string;
};

export type TLocalizationOption = {
  l?: string;
};

export class Playlist {
  private provider: AppleMusicConductorProvider;

  constructor(provider: AppleMusicConductorProvider) {
    this.provider = provider;
  }

  /**
   * Fetches a library playlist by its ID.
   *
   * @param playlistId - The ID of the playlist to fetch.
   * @param options - Additional options for the request.
   * @returns A promise that resolves to a PlaylistResponse.
   */
  async getLibraryById(
    playlistId: string,
    options: TGetLibraryPlaylistByIdOptions,
  ): Promise<PlaylistResponse> {
    let url = `${APPLE_MUSIC_BASE_URL}me/library/playlists/${playlistId}`;
    const params: Record<string, string> = { ...options };

    url = this.provider.injectParamsIntoUrl(url, params);
    return await this.provider.makeRequest(url);
  }

  /**
   * Fetches the current user's playlists.
   *
   * @param options - Additional options for the request.
   * @returns A promise that resolves to a PlaylistResponse.
   */
  async getCurrentUserPlaylists(
    options: TGetCurrentUserPlaylistsOptions,
  ): Promise<PlaylistResponse> {
    let url = `${APPLE_MUSIC_BASE_URL}me/library/playlists`;
    const params: Record<string, string | number> = { ...options };

    url = this.provider.injectParamsIntoUrl(url, params);
    return await this.provider.makeRequest(url);
  }

  /**
   * Creates a new playlist for the current user.
   *
   * @param input - The input data for creating the playlist.
   * @returns A promise that resolves to a PlaylistResponse.
   */
  async create(input: TCreatePlaylistInput): Promise<PlaylistResponse> {
    const { name, description, localization } = input;
    const url = new URL(`${APPLE_MUSIC_BASE_URL}me/library/playlists`);

    if (localization) {
      url.searchParams.append('l', localization);
    }

    const body = {
      attributes: {
        name,
        description,
      },
    };

    return await this.provider.makeRequest(url.toString(), 'POST', body);
  }

  /**
   * Adds tracks to a playlist.
   *
   * @param playlistId - The ID of the playlist to add tracks to.
   * @param trackIds - An array of track IDs to add to the playlist.
   * @param options - Additional options for the request.
   * @returns A promise that resolves when the tracks are added.
   */
  async addTracksToPlaylist(
    playlistId: string,
    trackIds: string[],
    options: TLocalizationOption,
  ): Promise<void> {
    let url = `${APPLE_MUSIC_BASE_URL}me/library/playlists/${playlistId}/tracks`;
    url = this.provider.injectParamsIntoUrl(url, options);

    const body = {
      data: trackIds.map((trackId) => ({
        id: trackId,
        type: 'songs',
      })),
    };
    return await this.provider.makeRequest(url, 'POST', body);
  }

  /**
   * Fetches the tracks of a user's playlist.
   *
   * @param playlistId - The ID of the playlist to fetch tracks for.
   * @returns A promise that resolves to a SongResponse.
   */
  async getUserPlaylistTracks(playlistId: string): Promise<SongResponse> {
    const url = `${APPLE_MUSIC_BASE_URL}${APPLE_MUSIC_METHODS_PATHS.current_user}${APPLE_MUSIC_METHODS_PATHS.library}${APPLE_MUSIC_METHODS_PATHS.playlists}${playlistId}/tracks`;
    return await this.provider.makeRequest(url);
  }
}
