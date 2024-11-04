import type { AppleMusic } from '..';
import { APPLE_MUSIC_BASE_URL, APPLE_MUSIC_METHODS_PATHS } from '../constants';
import type {
  TAddTracksToPlaylistInput,
  TCreatePlaylistInput,
} from '../types/inputs';
import type { PlaylistResponse, SongResponse } from '../types/response';

export class Playlist {
  private provider: AppleMusic;

  constructor(provider: AppleMusic) {
    this.provider = provider;
  }

  async getById(playlistId: string): Promise<PlaylistResponse> {
    const url = new URL(
      `${APPLE_MUSIC_BASE_URL}/me/library/playlists/${playlistId}`,
    );

    return await this.provider.makeRequest(url.toString());
  }

  async getCurrentUserPlaylists(): Promise<PlaylistResponse> {
    const url = new URL(`${APPLE_MUSIC_BASE_URL}/me/library/playlists`);
    return await this.provider.makeRequest(url.toString());
  }

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

  async addTracksToPlaylist(input: TAddTracksToPlaylistInput): Promise<void> {
    const { playlistId, trackIds, localization } = input;
    const url = new URL(
      `${APPLE_MUSIC_BASE_URL}me/library/playlists/${playlistId}/tracks`,
    );

    if (localization) {
      url.searchParams.append('l', localization);
    }

    const body = {
      data: trackIds.map((trackId) => ({
        id: trackId,
        type: 'songs',
      })),
    };

    return await this.provider.makeRequest(url.toString(), 'POST', body);
  }

  async getUserPlaylistTracks(playlistId: string): Promise<SongResponse> {
    const url = `${APPLE_MUSIC_BASE_URL}${APPLE_MUSIC_METHODS_PATHS.current_user}${APPLE_MUSIC_METHODS_PATHS.library}${APPLE_MUSIC_METHODS_PATHS.playlists}${playlistId}/tracks`;
    return await this.provider.makeRequest(url);
  }
}
