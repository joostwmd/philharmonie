import type { SpotifyConductorProvider } from '..';
import { SPOTIFY_API_BASE_URL, SPOTIFY_METHODS_PATHS } from '../constants';
import type {
  TGetByIdInput,
  TLimitAndOffsetOptions,
  TSpotifyRecommendationOptions,
} from '../types/input';
import type { SpotifyApi } from '../types/typed';

export class Track {
  private provider: SpotifyConductorProvider;

  constructor(provider: SpotifyConductorProvider) {
    this.provider = provider;
  }

  /**
   * Fetches a track by its ID.
   *
   * @param trackId - The ID of the track to fetch.
   * @returns A promise that resolves to a SingleTrackResponse.
   */
  async getById(trackId: string): Promise<SpotifyApi.SingleTrackResponse> {
    let url = `${SPOTIFY_API_BASE_URL}tracks/${trackId}`;
    url = this.provider.injectMarketIntoUrl(url);
    return await this.provider.makeRequest(url);
  }

  /**
   * Fetches several tracks by their IDs.
   *
   * @param trackIds - An array of track IDs to fetch.
   * @returns A promise that resolves to a MultipleTracksResponse.
   */
  async getSeveralById(
    trackIds: string[],
  ): Promise<SpotifyApi.MultipleTracksResponse> {
    let url = `${SPOTIFY_API_BASE_URL}tracks?ids=${encodeURIComponent(trackIds.join(','))}`;
    url = this.provider.injectMarketIntoUrl(url);
    return this.provider.makeRequest(url);
  }

  /**
   * Fetches the saved tracks for the current user.
   *
   * @param options - Additional options for the request.
   * @returns A promise that resolves to a UsersSavedTracksResponse.
   */
  async getUsersSavedTracks(
    options: TLimitAndOffsetOptions,
  ): Promise<SpotifyApi.UsersSavedTracksResponse> {
    let url = `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.current_user}tracks`;
    url = this.provider.injectMarketIntoUrl(url);
    url = this.provider.injectParamsIntoUrl(url, options);
    return await this.provider.makeRequest(url);
  }

  /**
   * Saves tracks for the current user.
   *
   * @param trackIds - An array of track IDs to save.
   * @returns A promise that resolves when the tracks are saved.
   */
  async saveTracksFoCurrentUser(trackIds: string[]): Promise<void> {
    const url = `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.current_user}${SPOTIFY_METHODS_PATHS.tracks}`;
    return await this.provider.makeRequest(url, 'PUT', { ids: trackIds });
  }

  /**
   * Removes tracks for the current user.
   *
   * @param trackIds - An array of track IDs to remove.
   * @returns A promise that resolves when the tracks are removed.
   */
  async removeTracksForCurrentsUser(trackIds: TGetByIdInput[]): Promise<void> {
    const url = `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.current_user}${SPOTIFY_METHODS_PATHS.tracks}`;
    return this.provider.makeRequest(url, 'DELETE', { ids: trackIds });
  }

  /**
   * Checks if the current user has saved specific tracks.
   *
   * @param trackIds - An array of track IDs to check.
   * @returns A promise that resolves to an array of booleans indicating whether each track is saved.
   */
  async checkUsersSavedTracks(
    trackIds: string[],
  ): Promise<SpotifyApi.CheckUserSavedAlbumsResponse> {
    const url = `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.current_user}${SPOTIFY_METHODS_PATHS.tracks}contains?ids=${encodeURIComponent(trackIds.join(','))}`;
    return await this.provider.makeRequest(url);
  }

  /**
   * Fetches the audio features of a track by its ID.
   *
   * @param trackId - The ID of the track to fetch audio features for.
   * @returns A promise that resolves to an AudioFeaturesResponse.
   */
  async getAudioFeaturesById(
    trackId: string,
  ): Promise<SpotifyApi.AudioFeaturesResponse> {
    const url = `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.audio_features}/${trackId}`;
    return await this.provider.makeRequest(url);
  }

  /**
   * Fetches the audio features of several tracks by their IDs.
   *
   * @param trackIds - An array of track IDs to fetch audio features for.
   * @returns A promise that resolves to a MultipleAudioFeaturesResponse.
   */
  async getSeveralAudioFeaturesById(
    trackIds: string[],
  ): Promise<SpotifyApi.MultipleAudioFeaturesResponse> {
    const url = `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.audio_features}?ids=${encodeURIComponent(trackIds.join(','))}`;
    return await this.provider.makeRequest(url);
  }

  /**
   * Fetches recommendations based on seeds.
   *
   * @param options - The options for the recommendations.
   * @returns A promise that resolves to a RecommendationsFromSeedsResponse.
   */
  async getRecommendations(
    options: TSpotifyRecommendationOptions,
  ): Promise<SpotifyApi.RecommendationsFromSeedsResponse> {
    let url = `${SPOTIFY_API_BASE_URL}recommendations`;
    url = this.provider.injectParamsIntoUrl(url, options);
    url = this.provider.injectMarketIntoUrl(url);
    return await this.provider.makeRequest(url.toString());
  }
}
