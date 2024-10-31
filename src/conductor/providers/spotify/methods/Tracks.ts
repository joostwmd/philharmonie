import { makeRequest } from '../../../../utils';
import { SPOTIFY_API_BASE_URL, SPOTIFY_METHODS_PATHS } from '../constants';
import type {
  TGetByIdInput,
  TSpotifyRecommendationOptions,
} from '../types/input';

export class Tracks {
  private apiToken: string;

  constructor(apiToken: string) {
    this.apiToken = apiToken;
  }

  async getById(trackId: TGetByIdInput): Promise<string> {
    console.log('spotify.tracks.getById', trackId);
    const url = `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.tracks}${trackId}`;
    return makeRequest(url, this.apiToken, 'spotfiy');
  }

  async getSeveralById(trackIds: TGetByIdInput[]): Promise<string[]> {
    const url = `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.tracks}?ids=${encodeURIComponent(trackIds.join(','))}`;
    return makeRequest(url, this.apiToken, 'spotify');
  }

  async getUsersSavedTracks(): Promise<string[]> {
    console.log('spotify.tracks.getUsersSavedTracks');
    const url = `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.current_user}${SPOTIFY_METHODS_PATHS.tracks}`;
    return makeRequest(url, this.apiToken, 'spotify');
  }

  async saveTracksForUser(trackIds: TGetByIdInput[]): Promise<void> {
    console.log('spotify.tracks.saveTrack', trackIds);
    const url = `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.current_user}${SPOTIFY_METHODS_PATHS.tracks}`;
    await makeRequest(url, this.apiToken, 'spotify', 'PUT', { ids: trackIds });
  }

  async removeTracksForUser(trackIds: TGetByIdInput[]): Promise<void> {
    console.log('spotify.tracks.removeTrack', trackIds);
    const url = `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.current_user}${SPOTIFY_METHODS_PATHS.tracks}`;
    await makeRequest(url, this.apiToken, 'spotify', 'DELETE', {
      ids: trackIds,
    });
  }

  async checkUsersSavedTracks(trackIds: TGetByIdInput[]): Promise<boolean[]> {
    console.log('spotify.tracks.checkUsersSavedTracks', trackIds);
    const url = `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.current_user}${SPOTIFY_METHODS_PATHS.tracks}contains`;
    return makeRequest(url, this.apiToken, 'spotify', 'GET', { ids: trackIds });
  }

  async getAudioFeaturesById(trackId: TGetByIdInput): Promise<string> {
    console.log('spotify.tracks.getAudioFeaturesForTrack', trackId);
    const url = `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.audio_features}${trackId}`;
    return makeRequest(url, this.apiToken, 'spotify');
  }

  async getSeveralAudioFeaturesById(
    trackIds: TGetByIdInput[],
  ): Promise<string[]> {
    const url = `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.audio_features}?ids=${encodeURIComponent(trackIds.join(','))}`;
    return makeRequest(url, this.apiToken, 'spotify');
  }

  async getRecommendations(
    options: TSpotifyRecommendationOptions,
  ): Promise<string[]> {
    const params = new URLSearchParams(options as any).toString();
    const url = `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.recommendations}?${params}`;
    return makeRequest(url, this.apiToken, 'spotify');
  }
}
