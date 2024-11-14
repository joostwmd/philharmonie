import type { SpotifyConductorProvider } from '..';
import { SPOTIFY_API_BASE_URL, SPOTIFY_METHODS_PATHS } from '../constants';
import type { TGetArtistAlbumsOptions, TGetByIdInput } from '../types/input';
import type { SpotifyApi } from '../types/typed';

export class Artist {
  private provider: SpotifyConductorProvider;

  constructor(provider: SpotifyConductorProvider) {
    this.provider = provider;
  }

  /**
   * Fetches an artist by their ID.
   *
   * @param artistId - The ID of the artist to fetch.
   * @returns A promise that resolves to a SingleArtistResponse.
   */
  async getById(artistId: string): Promise<SpotifyApi.SingleArtistResponse> {
    const url = `${SPOTIFY_API_BASE_URL}artists/${artistId}`;
    return await this.provider.makeRequest(url);
  }

  /**
   * Fetches several artists by their IDs.
   *
   * @param artistIds - An array of artist IDs to fetch.
   * @returns A promise that resolves to a MultipleArtistsResponse.
   */
  async getSeveralById(
    artistIds: string[],
  ): Promise<SpotifyApi.MultipleArtistsResponse> {
    const url = `${SPOTIFY_API_BASE_URL}artists/?ids=${encodeURIComponent(artistIds.join(','))}`;
    return await this.provider.makeRequest(url);
  }

  /**
   * Fetches albums of an artist by their ID.
   *
   * @param artistId - The ID of the artist to fetch albums for.
   * @param options - Additional options for the request.
   * @returns A promise that resolves to an ArtistsAlbumsResponse.
   */
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

  /**
   * Fetches the top tracks of an artist by their ID.
   *
   * @param artistId - The ID of the artist to fetch top tracks for.
   * @returns A promise that resolves to an ArtistsTopTracksResponse.
   */
  async getTopTracks(
    artistId: string,
  ): Promise<SpotifyApi.ArtistsTopTracksResponse> {
    let url = `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.artists}${artistId}/top-tracks`;
    url = this.provider.injectMarketIntoUrl(url);
    return await this.provider.makeRequest(url);
  }

  /**
   * Fetches related artists of an artist by their ID.
   *
   * @param artistId - The ID of the artist to fetch related artists for.
   * @returns A promise that resolves to an ArtistsRelatedArtistsResponse.
   */
  async getRelatedArtists(
    artistId: string,
  ): Promise<SpotifyApi.ArtistsRelatedArtistsResponse> {
    const url = `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.artists}${artistId}/related-artists`;
    return await this.provider.makeRequest(url);
  }
}
