// External URLs
export interface ISpotifyExternalUrls {
  spotify: string;
}

// Images
export interface ISpotifyImage {
  url: string;
  height: number;
  width: number;
}

// Followers
export interface ISpotifyFollowers {
  href: string;
  total: number;
}

// Paging Objects
export type ISpotifyPagingObject<T> = {
  href: string;
  limit: number;
  next: string | null;
  offset: number;
  previous: string | null;
  total: number;
  items: T[];
};

export interface ISpotifyCursor {
  after: string;
  before: string;
}

export interface ISpotifyCursorPagingObject<T> {
  href: string;
  limit: number;
  next: string | null;
  cursors: ISpotifyCursor;
  total: number;
  items: T[];
}

// Artists
export interface ISpotifyArtist {
  external_urls: ISpotifyExternalUrls;
  followers: ISpotifyFollowers;
  genres: string[];
  href: string;
  id: string;
  images: ISpotifyImage[];
  name: string;
  popularity: number;
  type: 'artist';
  uri: string;
}

// Albums
export interface ISpotifyAlbum {
  album_type: string;
  total_tracks: number;
  available_markets: string[];
  external_urls: ISpotifyExternalUrls;
  href: string;
  id: string;
  images: ISpotifyImage[];
  name: string;
  release_date: string;
  release_date_precision: string;
  restrictions?: {
    reason: string;
  };
  type: string;
  uri: string;
  artists: ISpotifyArtist[];
  tracks: ISpotifyPagingObject<ISpotifyTrack>;
  copyrights: Array<{
    text: string;
    type: string;
  }>;
  external_ids: {
    isrc: string;
    ean: string;
    upc: string;
  };
  genres: string[];
  label: string;
  popularity: number;
}

// Tracks
export interface ISpotifyTrack {
  artists: ISpotifyArtist[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_urls: ISpotifyExternalUrls;
  href: string;
  id: string;
  is_playable: boolean;
  linked_from?: {
    external_urls: ISpotifyExternalUrls;
    href: string;
    id: string;
    type: string;
    uri: string;
  };
  restrictions?: {
    reason: string;
  };
  name: string;
  preview_url: string;
  track_number: number;
  type: string;
  uri: string;
  is_local: boolean;
}

export interface ISpotifyTrackWithAlbum extends ISpotifyTrack {
  album: ISpotifyAlbum;
}

// Playlists
export interface ISpotifyPlaylistTrack {
  added_at: string;
  added_by: ISpotifyUser;
  is_local: boolean;
  track: ISpotifyTrack;
}

export interface ISpotifyPlaylist {
  collaborative: boolean;
  description: string;
  external_urls: ISpotifyExternalUrls;
  followers: ISpotifyFollowers;
  href: string;
  id: string;
  images: ISpotifyImage[];
  name: string;
  owner: ISpotifyUser;
  public: boolean;
  snapshot_id: string;
  tracks: ISpotifyPagingObject<ISpotifyPlaylistTrack>;
  type: string;
  uri: string;
}

export interface ISpotifySimplifiedPlaylist {
  collaborative: boolean;
  description: string;
  external_urls: ISpotifyExternalUrls;
  href: string;
  id: string;
  images: ISpotifyImage[];
  name: string;
  owner: ISpotifyUser;
  public: boolean;
  snapshot_id: string;
  tracks: {
    href: string;
    total: number;
  };
  type: string;
  uri: string;
}

// Users
export interface ISpotifyUser {
  display_name: string;
  external_urls: ISpotifyExternalUrls;
  followers: ISpotifyFollowers;
  href: string;
  id: string;
  images: ISpotifyImage[];
  type: string;
  uri: string;
}

export interface ISpotifyCurrentUser extends ISpotifyUser {
  country: string;
  email: string;
  explicit_content: ISpotifyExplicitContentSettings;
  product: string;
}

export interface ISpotifyExplicitContentSettings {
  filter_enabled: boolean;
  filter_locked: boolean;
}

// Saved Items
export interface ISpotifySavedAlbum {
  added_at: string;
  album: ISpotifyAlbum;
}

export interface ISpotifySavedTrack {
  added_at: string;
  track: ISpotifyTrackWithAlbum;
}

// Audio Features
export interface ISpotifyAudioFeatures {
  acousticness: number;
  analysis_url: string;
  danceability: number;
  duration_ms: number;
  energy: number;
  id: string;
  instrumentalness: number;
  key: number;
  liveness: number;
  loudness: number;
  mode: number;
  speechiness: number;
  tempo: number;
  time_signature: number;
  track_href: string;
  type: string;
  uri: string;
  valence: number;
}

// Recommendations
export interface ISpotifyRecommendationSeed {
  afterFilteringSize: number;
  afterRelinkingSize: number;
  href: string;
  id: string;
  initialPoolSize: number;
  type: string;
}

export interface ISpotifyRecommendation {
  seeds: ISpotifyRecommendationSeed[];
  tracks: ISpotifyTrack[];
}

// Search Results
export interface ISpotifySearchResult<T> {
  href: string;
  limit: number;
  next: string | null;
  offset: number;
  previous: string | null;
  total: number;
  items: T[];
}

export type ISpotifySearchResults = {
  tracks: ISpotifySearchResult<ISpotifyTrack>;
  artists: ISpotifySearchResult<ISpotifyArtist>;
  albums: ISpotifySearchResult<ISpotifyAlbum>;
  playlists: ISpotifySearchResult<ISpotifySimplifiedPlaylist>;
  shows: ISpotifySearchResult<ISpotifyShow>;
  episodes: ISpotifySearchResult<ISpotifyEpisode>;
  audiobooks: ISpotifySearchResult<ISpotifyAudiobook>;
};

// Shows
export interface ISpotifyShow {
  available_markets: string[];
  copyrights: Array<{
    text: string;
    type: string;
  }>;
  description: string;
  html_description: string;
  explicit: boolean;
  external_urls: ISpotifyExternalUrls;
  href: string;
  id: string;
  images: ISpotifyImage[];
  is_externally_hosted: boolean;
  languages: string[];
  media_type: string;
  name: string;
  publisher: string;
  type: string;
  uri: string;
  total_episodes: number;
}

// Episodes
export interface ISpotifyEpisode {
  audio_preview_url: string;
  description: string;
  html_description: string;
  duration_ms: number;
  explicit: boolean;
  external_urls: ISpotifyExternalUrls;
  href: string;
  id: string;
  images: ISpotifyImage[];
  is_externally_hosted: boolean;
  is_playable: boolean;
  language: string;
  languages: string[];
  name: string;
  release_date: string;
  release_date_precision: string;
  resume_point: {
    fully_played: boolean;
    resume_position_ms: number;
  };
  type: string;
  uri: string;
  restrictions?: {
    reason: string;
  };
}

// Audiobooks
export interface ISpotifyAudiobook {
  authors: Array<{
    name: string;
  }>;
  available_markets: string[];
  copyrights: Array<{
    text: string;
    type: string;
  }>;
  description: string;
  html_description: string;
  edition: string;
  explicit: boolean;
  external_urls: ISpotifyExternalUrls;
  href: string;
  id: string;
  images: ISpotifyImage[];
  languages: string[];
  media_type: string;
  name: string;
  narrators: Array<{
    name: string;
  }>;
  publisher: string;
  type: string;
  uri: string;
  total_chapters: number;
}
