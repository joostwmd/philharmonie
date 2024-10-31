import { makeRequest } from '../../../../utils';
import { SPOTIFY_API_BASE_URL, SPOTIFY_METHODS_PATHS } from '../constants';

type TSpotifyRecommendationOptions = {
  limit?: number; // Default: 20, Range: 1 - 100
  market?: string; // ISO 3166-1 alpha-2 country code
  seed_artists?: string; // Comma-separated list of Spotify IDs for seed artists
  seed_genres?: string; // Comma-separated list of genres
  seed_tracks?: string; // Comma-separated list of Spotify IDs for seed tracks
  min_acousticness?: number; // Range: 0 - 1
  max_acousticness?: number; // Range: 0 - 1
  target_acousticness?: number; // Range: 0 - 1
  min_danceability?: number; // Range: 0 - 1
  max_danceability?: number; // Range: 0 - 1
  target_danceability?: number; // Range: 0 - 1
  min_duration_ms?: number;
  max_duration_ms?: number;
  target_duration_ms?: number;
  min_energy?: number; // Range: 0 - 1
  max_energy?: number; // Range: 0 - 1
  target_energy?: number; // Range: 0 - 1
  min_instrumentalness?: number; // Range: 0 - 1
  max_instrumentalness?: number; // Range: 0 - 1
  target_instrumentalness?: number; // Range: 0 - 1
  min_key?: number; // Range: 0 - 11
  max_key?: number; // Range: 0 - 11
  target_key?: number; // Range: 0 - 11
  min_liveness?: number; // Range: 0 - 1
  max_liveness?: number; // Range: 0 - 1
  target_liveness?: number; // Range: 0 - 1
  min_loudness?: number;
  max_loudness?: number;
  target_loudness?: number;
  min_mode?: number; // Range: 0 - 1
  max_mode?: number; // Range: 0 - 1
  target_mode?: number; // Range: 0 - 1
  min_popularity?: number; // Range: 0 - 100
  max_popularity?: number; // Range: 0 - 100
  target_popularity?: number; // Range: 0 - 100
  min_speechiness?: number; // Range: 0 - 1
  max_speechiness?: number; // Range: 0 - 1
  target_speechiness?: number; // Range: 0 - 1
  min_tempo?: number;
  max_tempo?: number;
  target_tempo?: number;
  min_time_signature?: number; // Maximum value: 11
  max_time_signature?: number;
  target_time_signature?: number;
  min_valence?: number; // Range: 0 - 1
  max_valence?: number; // Range: 0 - 1
  target_valence?: number; // Range: 0 - 1
};

export class Tracks {
  private apiToken: string;

  constructor(apiToken: string) {
    this.apiToken = apiToken;
  }

  async getById(trackId: string): Promise<string> {
    console.log('spotify.tracks.getById', trackId);
    const url = `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.tracks}${trackId}`;
    return makeRequest(url, this.apiToken, 'spotfiy');
  }

  async getSeveralById(trackIds: string[]): Promise<string[]> {
    const url = `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.tracks}?ids=${encodeURIComponent(trackIds.join(','))}`;
    return makeRequest(url, this.apiToken, 'spotify');
  }

  async getUsersSavedTracks(): Promise<string[]> {
    console.log('spotify.tracks.getUsersSavedTracks');
    const url = `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.current_user}${SPOTIFY_METHODS_PATHS.tracks}`;
    return makeRequest(url, this.apiToken, 'spotify');
  }

  async saveTracksForUser(trackIds: string[]): Promise<void> {
    console.log('spotify.tracks.saveTrack', trackIds);
    const url = `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.current_user}${SPOTIFY_METHODS_PATHS.tracks}`;
    await makeRequest(url, this.apiToken, 'spotify', 'PUT', { ids: trackIds });
  }

  async removeTracksForUser(trackIds: string[]): Promise<void> {
    console.log('spotify.tracks.removeTrack', trackIds);
    const url = `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.current_user}${SPOTIFY_METHODS_PATHS.tracks}`;
    await makeRequest(url, this.apiToken, 'spotify', 'DELETE', {
      ids: trackIds,
    });
  }

  async checkUsersSavedTracks(trackIds: string[]): Promise<boolean[]> {
    console.log('spotify.tracks.checkUsersSavedTracks', trackIds);
    const url = `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.current_user}${SPOTIFY_METHODS_PATHS.tracks}contains`;
    return makeRequest(url, this.apiToken, 'spotify', 'GET', { ids: trackIds });
  }

  async getAudioFeaturesById(trackId: string): Promise<string> {
    console.log('spotify.tracks.getAudioFeaturesForTrack', trackId);
    const url = `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.audio_features}${trackId}`;
    return makeRequest(url, this.apiToken, 'spotify');
  }

  async getSeveralAudioFeaturesById(trackIds: string[]): Promise<string[]> {
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
