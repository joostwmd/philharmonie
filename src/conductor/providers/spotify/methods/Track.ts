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

  async getById(trackId: string): Promise<SpotifyApi.SingleTrackResponse> {
    let url = `${SPOTIFY_API_BASE_URL}tracks/${trackId}`;
    url = this.provider.injectMarketIntoUrl(url);
    return await this.provider.makeRequest(url);
  }

  async getSeveralById(
    trackIds: string[],
  ): Promise<SpotifyApi.MultipleTracksResponse> {
    let url = `${SPOTIFY_API_BASE_URL}tracks?ids=${encodeURIComponent(trackIds.join(','))}`;
    url = this.provider.injectMarketIntoUrl(url);
    return this.provider.makeRequest(url);
  }

  async getUsersSavedTracks(
    options: TLimitAndOffsetOptions,
  ): Promise<SpotifyApi.UsersSavedTracksResponse> {
    let url = `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.current_user}tracks`;
    url = this.provider.injectMarketIntoUrl(url);
    url = this.provider.injectParamsIntoUrl(url, options);
    return await this.provider.makeRequest(url);
  }

  async saveTracksFoCurrentUser(trackIds: string[]): Promise<void> {
    const url = `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.current_user}${SPOTIFY_METHODS_PATHS.tracks}`;
    return await this.provider.makeRequest(url, 'PUT', { ids: trackIds });
  }

  async removeTracksForCurrentsUser(trackIds: TGetByIdInput[]): Promise<void> {
    const url = `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.current_user}${SPOTIFY_METHODS_PATHS.tracks}`;
    return this.provider.makeRequest(url, 'DELETE', { ids: trackIds });
  }

  async checkUsersSavedTracks(
    trackIds: string[],
  ): Promise<SpotifyApi.CheckUserSavedAlbumsResponse> {
    const url = `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.current_user}${SPOTIFY_METHODS_PATHS.tracks}contains?ids=${encodeURIComponent(trackIds.join(','))}`;
    return await this.provider.makeRequest(url);
  }

  async getAudioFeaturesById(
    trackId: string,
  ): Promise<SpotifyApi.AudioFeaturesResponse> {
    const url = `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.audio_features}/${trackId}`;
    return await this.provider.makeRequest(url);
  }

  async getSeveralAudioFeaturesById(
    trackIds: string[],
  ): Promise<SpotifyApi.MultipleAudioFeaturesResponse> {
    const url = `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.audio_features}?ids=${encodeURIComponent(trackIds.join(','))}`;
    return await this.provider.makeRequest(url);
  }

  async getRecommendations(
    options: TSpotifyRecommendationOptions,
  ): Promise<SpotifyApi.RecommendationsFromSeedsResponse> {
    let url = `${SPOTIFY_API_BASE_URL}recommendations`;
    url = this.provider.injectParamsIntoUrl(url, options);
    url = this.provider.injectMarketIntoUrl(url);
    return await this.provider.makeRequest(url.toString());
  }
}
