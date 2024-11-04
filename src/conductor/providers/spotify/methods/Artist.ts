import type { SpotifyConductorProvider } from '..';
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
  private provider: SpotifyConductorProvider;

  constructor(provider: SpotifyConductorProvider) {
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
    let url = `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.artists}${artistId}/albums`;
    url = this.provider.injectMarketIntoUrl(url);
    return await this.provider.makeRequest(url);
  }

  async getTopTracks(
    artistId: TGetByIdInput,
  ): Promise<TGetArtistsTopTracksResponse> {
    let url = `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.artists}${artistId}/top-tracks`;
    url = this.provider.injectMarketIntoUrl(url);
    return await this.provider.makeRequest(url);
  }

  async getRelatedArtists(
    artistId: TGetByIdInput,
  ): Promise<TGetArtistsRelatedArtistsResponse> {
    const url = `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.artists}${artistId}/related-artists`;
    return await this.provider.makeRequest(url);
  }
}
