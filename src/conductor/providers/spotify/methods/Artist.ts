import type { Spotify } from '..';
import { SPOTIFY_API_BASE_URL, SPOTIFY_METHODS_PATHS } from '../constants';
import type { TGetByIdInput } from '../types/input';
import type {
  TGetArtistByIdResponse,
  TGetArtistsAlbumsResponse,
  TGetArtistsRelatedArtistsResponse,
  TGetArtistsTopTracksResponse,
  TGetSeveralArtistsByIdsResponse,
} from '../types/response';

export class Artist {
  private provider: Spotify;

  constructor(provider: Spotify) {
    this.provider = provider;
  }
  async getById(artistId: TGetByIdInput): Promise<TGetArtistByIdResponse> {
    const url = `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.artists}${artistId}`;
    return await this.provider.makeRequest(url);
  }

  async getSeveralById(
    artistIds: TGetByIdInput[],
  ): Promise<TGetSeveralArtistsByIdsResponse> {
    const url = `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.albums}?ids=${encodeURIComponent(artistIds.join(','))}`;
    return await this.provider.makeRequest(url);
  }

  async getAlbums(artistId: TGetByIdInput): Promise<TGetArtistsAlbumsResponse> {
    const url = `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.artists}${artistId}/albums`;
    return await this.provider.makeRequest(url);
  }

  async getTopTracks(
    artistId: TGetByIdInput,
  ): Promise<TGetArtistsTopTracksResponse> {
    const url = `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.artists}${artistId}/top-tracks`;
    return await this.provider.makeRequest(url);
  }

  async getRelatedArtists(
    artistId: TGetByIdInput,
  ): Promise<TGetArtistsRelatedArtistsResponse> {
    const url = `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.artists}${artistId}/related-artists`;
    return await this.provider.makeRequest(url);
  }
}
