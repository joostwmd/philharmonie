import type { SpotifyConductorProvider } from '..';
import { SPOTIFY_API_BASE_URL, SPOTIFY_METHODS_PATHS } from '../constants';
import type { TGetArtistAlbumsOptions, TGetByIdInput } from '../types/input';
import type { SpotifyApi } from '../types/typed';

export class Artist {
  private provider: SpotifyConductorProvider;

  constructor(provider: SpotifyConductorProvider) {
    this.provider = provider;
  }
  async getById(artistId: string): Promise<SpotifyApi.SingleArtistResponse> {
    const url = `${SPOTIFY_API_BASE_URL}artists/${artistId}`;
    return await this.provider.makeRequest(url);
  }

  async getSeveralById(
    artistIds: string[],
  ): Promise<SpotifyApi.MultipleArtistsResponse> {
    const url = `${SPOTIFY_API_BASE_URL}artists/?ids=${encodeURIComponent(artistIds.join(','))}`;
    return await this.provider.makeRequest(url);
  }

  async getAlbums(
    artistId: string,
    options: TGetArtistAlbumsOptions,
  ): Promise<SpotifyApi.ArtistsAlbumsResponse> {
    let url = `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.artists}${artistId}/albums`;
    url = this.provider.injectMarketIntoUrl(url);

    const params: Record<string, string | number | undefined> = {
      limit: options.limit,
      offset: options.offset,
    };

    if (options.include_groups) {
      params.include_groups = options.include_groups.join(',');
    }

    url = this.provider.injectParamsIntoUrl(url, params);
    return await this.provider.makeRequest(url);
  }

  async getTopTracks(
    artistId: string,
  ): Promise<SpotifyApi.ArtistsTopTracksResponse> {
    let url = `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.artists}${artistId}/top-tracks`;
    url = this.provider.injectMarketIntoUrl(url);
    return await this.provider.makeRequest(url);
  }

  async getRelatedArtists(
    artistId: string,
  ): Promise<SpotifyApi.ArtistsRelatedArtistsResponse> {
    const url = `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.artists}${artistId}/related-artists`;
    return await this.provider.makeRequest(url);
  }
}
