export type TGetByIdInput = string;

export type TChangePlaylistDetailsInput = {
  playlistId: string;
  details: { name: string; description: string; public: boolean };
};

export type TGetPlaylistItemsInput = {
  playlistId: string;
  market?: string;
  fields?: string;
  limit?: number;
  offset?: number;
  additional_types?: string;
};

export type TUpdatePlaylistItemsInput = {
  playlistId: string;
  options?: {
    uris?: string[];
    range_start?: number;
    insert_before?: number;
    range_length?: number;
    snapshot_id?: string;
  };
};

export type TAddItemsToPlaylistInput = {
  playlistId: string;
  uris: string[];
  position?: number;
};

export type TRemoveItemsFromPlaylistInput = {
  playlistId: string;
  tracks: { uri: string }[];
  snapshot_id?: string;
};

export type TGetCurrentUserPlaylistsInput = {
  limit?: number;
  offset?: number;
};

export type TGetUserPlaylistsInput = {
  userId: string;
  limit?: number;
  offset?: number;
};

export type TCreatePlaylistInput = {
  userId: string;
  name: string;
  options?: {
    public?: boolean;
    collaborative?: boolean;
    description?: string;
  };
};

export type TAddCoverImageInput = {
  playlistId: string;
  imageData: string;
};

export type TSpotifyRecommendationOptions = {
  limit?: number; // Default: 20, Range: 1 - 100
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

export type TFollowInput = {
  type: 'artist' | 'user';
  ids: string[];
};

export interface TSearchInput {
  query: string;
  type: string[];
  limit?: number;
  offset?: number;
  include_external?: string;
}
