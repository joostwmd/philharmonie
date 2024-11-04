import type { SpotifyConductorProvider } from '..';
import { SPOTIFY_API_BASE_URL, SPOTIFY_METHODS_PATHS } from '../constants';
import type { ISpotifyTrackWithAlbum } from '../types/base';
import type {
  TGetByIdInput,
  TSpotifyRecommendationOptions,
} from '../types/input';
import type {
  TGetAudioFeaturesByIdResponse,
  TGetSeveralAudioFeaturesByIdsResponse,
  TGetSeveralTracksByIdsResponse,
  TGetUsersSavedTracksResponse,
} from '../types/response';

export class Track {
  private provider: SpotifyConductorProvider;

  constructor(provider: SpotifyConductorProvider) {
    this.provider = provider;
  }

  async getById(trackId: TGetByIdInput): Promise<ISpotifyTrackWithAlbum> {
    let url = `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.tracks}${trackId}`;
    url = this.provider.injectMarketIntoUrl(url);
    return await this.provider.makeRequest(url);
  }

  async getSeveralById(
    trackIds: TGetByIdInput[],
  ): Promise<TGetSeveralTracksByIdsResponse> {
    let url = `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.tracks}?ids=${encodeURIComponent(trackIds.join(','))}`;
    url = this.provider.injectMarketIntoUrl(url);
    return this.provider.makeRequest(url);
  }

  async getUsersSavedTracks(): Promise<TGetUsersSavedTracksResponse> {
    let url = `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.current_user}${SPOTIFY_METHODS_PATHS.tracks}`;
    url = this.provider.injectMarketIntoUrl(url);
    return await this.provider.makeRequest(url);
  }

  async saveTracksFoCurrentUser(trackIds: TGetByIdInput[]): Promise<void> {
    const url = `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.current_user}${SPOTIFY_METHODS_PATHS.tracks}`;
    return await this.provider.makeRequest(url, 'PUT', { ids: trackIds });
  }

  async removeTracksForCurrentsUser(trackIds: TGetByIdInput[]): Promise<void> {
    const url = `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.current_user}${SPOTIFY_METHODS_PATHS.tracks}`;
    return this.provider.makeRequest(url, 'DELETE', { ids: trackIds });
  }

  async checkUsersSavedTracks(trackIds: TGetByIdInput[]): Promise<boolean[]> {
    const url = `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.current_user}${SPOTIFY_METHODS_PATHS.tracks}contains`;
    return await this.provider.makeRequest(url, 'GET', { ids: trackIds });
  }

  async getAudioFeaturesById(
    trackId: TGetByIdInput,
  ): Promise<TGetAudioFeaturesByIdResponse> {
    const url = `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.audio_features}${trackId}`;
    return await this.provider.makeRequest(url);
  }

  async getSeveralAudioFeaturesById(
    trackIds: TGetByIdInput[],
  ): Promise<string[]> {
    const url = `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.audio_features}?ids=${encodeURIComponent(trackIds.join(','))}`;
    return await this.provider.makeRequest(url);
  }

  async getRecommendations(
    options: TSpotifyRecommendationOptions,
  ): Promise<TGetSeveralAudioFeaturesByIdsResponse> {
    const params = new URLSearchParams(options as any).toString();
    let url = `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.recommendations}?${params}`;
    url = this.provider.injectMarketIntoUrl(url);
    return await this.provider.makeRequest(url);
  }
}
