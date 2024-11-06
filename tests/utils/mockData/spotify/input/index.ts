import type {
  TCreatePlaylistOptions,
  TFieldsAndAdditionalTypes,
  TGetUsersTopItemsOptions,
  TLimitAndOffsetOptions,
  TPlaylistDetailsOptions,
  TSearchInput,
} from '../../../../../src/conductor/providers/spotify/types/input';

export const spotifyTrackUriSample = 'spotify:track:11dFghVXANMlKmJXsNCbNl';
export const spotifyTrackUrisSample = ['spotify:track:11dFghVXANMlKmJXsNCbNl'];
export const spotifyAlbumIdSample = '01S3g4PCFaRQMfwiAm4K2H';
export const spotifyAlbumIdsSample = ['01S3g4PCFaRQMfwiAm4K2H'];
export const spotifyArtistIdSample = '6sgeY4vovk7KfxVwiu2V9E';
export const spotifyArtistIdsSample = ['6sgeY4vovk7KfxVwiu2V9E'];
export const spotifyPlaylistIdSample = '5k8xjLPpBzmVuTSGtSUqcp';
export const spotifyPlaylistIdsSample = ['5k8xjLPpBzmVuTSGtSUqcp'];
export const spotifyTrackIdSample = '11dFghVXANMlKmJXsNCbNl';
export const spotifyTrackIdsSample = ['11dFghVXANMlKmJXsNCbNl'];
export const spotifyUserIdSample = '717ut5w9hmph9ckf8y81n3q4w';

export const spotifyLimitAndOffsetOptionsSample: TLimitAndOffsetOptions = {
  offset: 0,
  limit: 10,
};

export const spotifyFieldsAndAdditionalTypesOptionsSample: TFieldsAndAdditionalTypes =
  {
    fields: 'items(track(name,href))',
    additional_types: ['track'],
  };

export const spotifyChangePlaylistDetailsOptionsSample: TPlaylistDetailsOptions =
  {
    name: 'testname',
    description: 'testdescription',
    public: true,
  };

export const spotifyUpdatePlaylistItemsOptionsSample = {
  range_start: 1,
  insert_before: 3,
  range_length: 2,
};

export const spotifyAddItemsToPlaylistOptionsSample = {
  uris: spotifyTrackUrisSample,
  position: 1,
};

export const spotifyRemoveItemsFromPlaylistOptionsSample = {
  tracks: [{ uri: spotifyTrackUriSample }],
  snapshot_id: 'snapshotid',
};

export const spotifyCreatePlaylistOptionsSample: TCreatePlaylistOptions = {
  name: 'testname',
  description: 'testdescription',
  public: true,
  collaborative: false,
};

export const spotifySearchItemInputSample: TSearchInput = {
  query: 'test',
  type: ['track'],
  limit: 20,
  offset: 0,
  include_external: 'audio',
};

export const spotifyGetRecommendationsInputSample = {
  limit: 20, // Default: 20, Range: 1 - 100
  seed_artists: '4NHQUGzhtTLFvgF5SZesLK', // Comma-separated list of Spotify IDs for seed artists
  seed_genres: 'classical,country', // Comma-separated list of genres
  seed_tracks: '0c6xIDDpzE81m2q797ordA', // Comma-separated list of Spotify IDs for seed tracks
  min_acousticness: 0.1, // Range: 0 - 1
  max_acousticness: 0.9, // Range: 0 - 1
  target_acousticness: 0.5, // Range: 0 - 1
  min_danceability: 0.2, // Range: 0 - 1
  max_danceability: 0.8, // Range: 0 - 1
  target_danceability: 0.6, // Range: 0 - 1
  min_duration_ms: 180000,
  max_duration_ms: 300000,
  target_duration_ms: 240000,
  min_energy: 0.3, // Range: 0 - 1
  max_energy: 0.7, // Range: 0 - 1
  target_energy: 0.5, // Range: 0 - 1
  min_instrumentalness: 0.0, // Range: 0 - 1
  max_instrumentalness: 0.5, // Range: 0 - 1
  target_instrumentalness: 0.3, // Range: 0 - 1
  min_key: 0, // Range: 0 - 11
  max_key: 11, // Range: 0 - 11
  target_key: 5, // Range: 0 - 11
  min_liveness: 0.1, // Range: 0 - 1
  max_liveness: 0.9, // Range: 0 - 1
  target_liveness: 0.5, // Range: 0 - 1
  min_loudness: -60,
  max_loudness: 0,
  target_loudness: -30,
  min_mode: 0, // Range: 0 - 1
  max_mode: 1, // Range: 0 - 1
  target_mode: 1, // Range: 0 - 1
  min_popularity: 10, // Range: 0 - 100
  max_popularity: 90, // Range: 0 - 100
  target_popularity: 50, // Range: 0 - 100
  min_speechiness: 0.1, // Range: 0 - 1
  max_speechiness: 0.5, // Range: 0 - 1
  target_speechiness: 0.3, // Range: 0 - 1
  min_tempo: 60,
  max_tempo: 180,
  target_tempo: 120,
  min_time_signature: 3, // Maximum value: 11
  max_time_signature: 7,
  target_time_signature: 4,
  min_valence: 0.2, // Range: 0 - 1
  max_valence: 0.8, // Range: 0 - 1
  target_valence: 0.5, // Range: 0 - 1
};

export const spotifyGetCurrentUsersTopArtistsOptionsSample: TGetUsersTopItemsOptions =
  {
    type: 'artists',
    time_range: 'medium_term',
    limit: 20,
    offset: 0,
  };

export const spotifyGetCurrentUsersTopTracksOptionsSample: TGetUsersTopItemsOptions =
  {
    type: 'tracks',
    time_range: 'medium_term',
    limit: 20,
    offset: 0,
  };
