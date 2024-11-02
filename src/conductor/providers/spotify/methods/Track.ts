import type { Spotify } from '..';
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
  private provider: Spotify;

  constructor(provider: Spotify) {
    this.provider = provider;
  }

  async getById(trackId: TGetByIdInput): Promise<ISpotifyTrackWithAlbum> {
    console.log('spotify.tracks.getById', trackId);
    const url = `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.tracks}${trackId}`;
    return await this.provider.makeRequest(url);
  }

  async getSeveralById(
    trackIds: TGetByIdInput[],
  ): Promise<TGetSeveralTracksByIdsResponse> {
    const url = `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.tracks}?ids=${encodeURIComponent(trackIds.join(','))}`;
    return this.provider.makeRequest(url);
  }

  async getUsersSavedTracks(): Promise<TGetUsersSavedTracksResponse> {
    console.log('spotify.tracks.getUsersSavedTracks');
    const url = `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.current_user}${SPOTIFY_METHODS_PATHS.tracks}`;
    return await this.provider.makeRequest(url);
  }

  async saveTracksFoCurrentUser(trackIds: TGetByIdInput[]): Promise<void> {
    console.log('spotify.tracks.saveTrack', trackIds);
    const url = `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.current_user}${SPOTIFY_METHODS_PATHS.tracks}`;
    return await this.provider.makeRequest(url);
  }

  async removeTracksForCurrentsUser(trackIds: TGetByIdInput[]): Promise<void> {
    console.log('spotify.tracks.removeTrack', trackIds);
    const url = `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.current_user}${SPOTIFY_METHODS_PATHS.tracks}`;
    return this.provider.makeRequest(url, 'DELETE', { ids: trackIds });
  }

  async checkUsersSavedTracks(trackIds: TGetByIdInput[]): Promise<boolean[]> {
    console.log('spotify.tracks.checkUsersSavedTracks', trackIds);
    const url = `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.current_user}${SPOTIFY_METHODS_PATHS.tracks}contains`;
    return await this.provider.makeRequest(url, 'GET', { ids: trackIds });
  }

  async getAudioFeaturesById(
    trackId: TGetByIdInput,
  ): Promise<TGetAudioFeaturesByIdResponse> {
    console.log('spotify.tracks.getAudioFeaturesForTrack', trackId);
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
    const url = `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.recommendations}?${params}`;
    return await this.provider.makeRequest(url);
  }
}
