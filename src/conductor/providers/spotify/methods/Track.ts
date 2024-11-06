import type { SpotifyConductorProvider } from '..';
import { SPOTIFY_API_BASE_URL, SPOTIFY_METHODS_PATHS } from '../constants';
import type {
  TGetByIdInput,
  TSpotifyRecommendationOptions,
} from '../types/input';
import type { SpotifyApi } from '../types/typed';

export class Track {
  private provider: SpotifyConductorProvider;

  constructor(provider: SpotifyConductorProvider) {
    this.provider = provider;
  }

  async getById(trackId: string): Promise<SpotifyApi.SingleTrackResponse> {
    let url = `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.tracks}${trackId}`;
    url = this.provider.injectMarketIntoUrl(url);
    return await this.provider.makeRequest(url);
  }

  async getSeveralById(
    trackIds: string[],
  ): Promise<SpotifyApi.MultipleTracksResponse> {
    let url = `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.tracks}?ids=${encodeURIComponent(trackIds.join(','))}`;
    url = this.provider.injectMarketIntoUrl(url);
    return this.provider.makeRequest(url);
  }

  async getUsersSavedTracks(): Promise<SpotifyApi.UsersSavedTracksResponse> {
    let url = `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.current_user}${SPOTIFY_METHODS_PATHS.tracks}`;
    url = this.provider.injectMarketIntoUrl(url);
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
    const url = `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.current_user}${SPOTIFY_METHODS_PATHS.tracks}contains`;
    return await this.provider.makeRequest(url, 'GET', { ids: trackIds });
  }

  async getAudioFeaturesById(
    trackId: string,
  ): Promise<SpotifyApi.AudioFeaturesResponse> {
    const url = `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.audio_features}${trackId}`;
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
    const {
      limit,
      seed_artists,
      seed_genres,
      seed_tracks,
      min_acousticness,
      max_acousticness,
      target_acousticness,
      min_danceability,
      max_danceability,
      target_danceability,
      min_duration_ms,
      max_duration_ms,
      target_duration_ms,
      min_energy,
      max_energy,
      target_energy,
      min_instrumentalness,
      max_instrumentalness,
      target_instrumentalness,
      min_key,
      max_key,
      target_key,
      min_liveness,
      max_liveness,
      target_liveness,
      min_loudness,
      max_loudness,
      target_loudness,
      min_mode,
      max_mode,
      target_mode,
      min_popularity,
      max_popularity,
      target_popularity,
      min_speechiness,
      max_speechiness,
      target_speechiness,
      min_tempo,
      max_tempo,
      target_tempo,
      min_time_signature,
      max_time_signature,
      target_time_signature,
      min_valence,
      max_valence,
      target_valence,
    } = options;

    const params: Record<string, string | number> = {};

    if (limit !== undefined) params.limit = limit;
    if (seed_artists) params.seed_artists = seed_artists;
    if (seed_genres) params.seed_genres = seed_genres;
    if (seed_tracks) params.seed_tracks = seed_tracks;
    if (min_acousticness !== undefined)
      params.min_acousticness = min_acousticness;
    if (max_acousticness !== undefined)
      params.max_acousticness = max_acousticness;
    if (target_acousticness !== undefined)
      params.target_acousticness = target_acousticness;
    if (min_danceability !== undefined)
      params.min_danceability = min_danceability;
    if (max_danceability !== undefined)
      params.max_danceability = max_danceability;
    if (target_danceability !== undefined)
      params.target_danceability = target_danceability;
    if (min_duration_ms !== undefined) params.min_duration_ms = min_duration_ms;
    if (max_duration_ms !== undefined) params.max_duration_ms = max_duration_ms;
    if (target_duration_ms !== undefined)
      params.target_duration_ms = target_duration_ms;
    if (min_energy !== undefined) params.min_energy = min_energy;
    if (max_energy !== undefined) params.max_energy = max_energy;
    if (target_energy !== undefined) params.target_energy = target_energy;
    if (min_instrumentalness !== undefined)
      params.min_instrumentalness = min_instrumentalness;
    if (max_instrumentalness !== undefined)
      params.max_instrumentalness = max_instrumentalness;
    if (target_instrumentalness !== undefined)
      params.target_instrumentalness = target_instrumentalness;
    if (min_key !== undefined) params.min_key = min_key;
    if (max_key !== undefined) params.max_key = max_key;
    if (target_key !== undefined) params.target_key = target_key;
    if (min_liveness !== undefined) params.min_liveness = min_liveness;
    if (max_liveness !== undefined) params.max_liveness = max_liveness;
    if (target_liveness !== undefined) params.target_liveness = target_liveness;
    if (min_loudness !== undefined) params.min_loudness = min_loudness;
    if (max_loudness !== undefined) params.max_loudness = max_loudness;
    if (target_loudness !== undefined) params.target_loudness = target_loudness;
    if (min_mode !== undefined) params.min_mode = min_mode;
    if (max_mode !== undefined) params.max_mode = max_mode;
    if (target_mode !== undefined) params.target_mode = target_mode;
    if (min_popularity !== undefined) params.min_popularity = min_popularity;
    if (max_popularity !== undefined) params.max_popularity = max_popularity;
    if (target_popularity !== undefined)
      params.target_popularity = target_popularity;
    if (min_speechiness !== undefined) params.min_speechiness = min_speechiness;
    if (max_speechiness !== undefined) params.max_speechiness = max_speechiness;
    if (target_speechiness !== undefined)
      params.target_speechiness = target_speechiness;
    if (min_tempo !== undefined) params.min_tempo = min_tempo;
    if (max_tempo !== undefined) params.max_tempo = max_tempo;
    if (target_tempo !== undefined) params.target_tempo = target_tempo;
    if (min_time_signature !== undefined)
      params.min_time_signature = min_time_signature;
    if (max_time_signature !== undefined)
      params.max_time_signature = max_time_signature;
    if (target_time_signature !== undefined)
      params.target_time_signature = target_time_signature;
    if (min_valence !== undefined) params.min_valence = min_valence;
    if (max_valence !== undefined) params.max_valence = max_valence;
    if (target_valence !== undefined) params.target_valence = target_valence;

    const url = new URL(`${SPOTIFY_API_BASE_URL}/recommendations`);
    Object.keys(params).forEach((key) => {
      url.searchParams.append(key, String(params[key]));
    });

    return await this.provider.makeRequest(url.toString());
  }
}
