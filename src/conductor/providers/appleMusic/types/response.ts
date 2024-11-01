import type {
  Album,
  Playlist,
  Artist,
  Storefront,
  SearchResultSection,
  Song,
} from './base';

// https://developer.apple.com/documentation/applemusicapi/songresponse
export interface SongResponse {
  data: Song[];
}

// https://developer.apple.com/documentation/applemusicapi/albumresponse
export interface AlbumResponse {
  data: Album[];
}

// https://developer.apple.com/documentation/applemusicapi/playlistresponse
export interface PlaylistResponse {
  data: Playlist[];
}

// https://developer.apple.com/documentation/applemusicapi/artistresponse
export interface ArtistResponse {
  data: Artist[];
}

export interface StorefrontResponse {
  data: Storefront[];
}

export interface SearchResultsResponse {
  results: {
    artists?: SearchResultSection<Artist>;
    songs?: SearchResultSection<Song>;
    albums?: SearchResultSection<Album>;
    // Add other resource types as needed
  };
  meta: {
    results: {
      order: string[];
      rawOrder: string[];
    };
  };
}
