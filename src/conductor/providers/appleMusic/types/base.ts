// https://developer.apple.com/documentation/applemusicapi/relationship
export interface Relationship<ResourceType> {
  data: ResourceType[];
  href: string;
  meta?: any;
  next?: string | undefined;
}

// https://developer.apple.com/documentation/applemusicapi/resource
export interface Resource {
  href?: string | undefined;
  id: string;
  type: string;
}

// https://developer.apple.com/documentation/applemusicapi/song
export interface Song extends Resource {
  type: 'songs';
  // https://developer.apple.com/documentation/applemusicapi/song/attributes
  attributes?:
    | {
        albumName: string;
        artistName: string;
        artwork?: Artwork | undefined;
        composerName?: string | undefined;
        contentRating?: string | undefined;
        discNumber: number;
        durationInMillis: number;
        editorialNotes?: EditorialNotes | undefined;
        genreNames: string[];
        hasLyrics: boolean;
        isAppleDigitalMaster: boolean;
        isrc: string;
        movementCount?: number | undefined;
        movementName?: string | undefined;
        movementNumber?: string | undefined;
        name: string;
        playParams?: PlayParameters | undefined;
        previews: Preview[];
        releaseDate: string;
        trackNumber: number;
        url: string;
        workName?: string | undefined;
      }
    | undefined;
  relationships?: SongRelationships | undefined;
}

// https://developer.apple.com/documentation/applemusicapi/song/relationships
export interface SongRelationships {
  albums: Relationship<Album>;
  artists: Relationship<Artist>;
  genres?: Relationship<Genre> | undefined;
  station?: { data: Station } | undefined;
}

// https://developer.apple.com/documentation/applemusicapi/station
export interface Station extends Resource {
  type: 'stations';
  artwork: Artwork;
  durationInMillis?: number | undefined;
  editorialNotes?: EditorialNotes | undefined;
  episodeNumber?: number | undefined;
  isLive: boolean;
  name: string;
  url: string;
}

// https://developer.apple.com/documentation/applemusicapi/artwork
export interface Artwork {
  width: number;
  height: number;
  url: string;
  bgColor?: string | undefined;
  textColor1?: string | undefined;
  textColor2?: string | undefined;
  textColor3?: string | undefined;
  textColor4?: string | undefined;
}

// https://developer.apple.com/documentation/applemusicapi/editorialnotes
export interface EditorialNotes {
  short: string;
  standard?: string;
}

// https://developer.apple.com/documentation/applemusicapi/playparameters
export interface PlayParameters {
  id: string;
  kind: string;
  versionHash?: string;
}

// https://developer.apple.com/documentation/applemusicapi/preview
export interface Preview {
  artwork?: Artwork | undefined;
  url: string;
}

// https://developer.apple.com/documentation/applemusicapi/artist
export interface Artist extends Resource {
  attributes?:
    | {
        artwork?: Artwork | undefined;
        editorialNotes?: EditorialNotes | undefined;
        genreNames: string[];
        name: string;
        url: string;
      }
    | undefined;
  relationships?: ArtistRelationships | undefined;
  type: 'artists';
}

// https://developer.apple.com/documentation/applemusicapi/artist/relationships
export interface ArtistRelationships {
  albums: Relationship<Album>;
  genres?: Relationship<Genre> | undefined;
}

// https://developer.apple.com/documentation/applemusicapi/album
export interface Album extends Resource {
  // https://developer.apple.com/documentation/applemusicapi/album/attributes
  attributes?:
    | {
        // albumName might not actually be a required attribute of Album.
        // There may be a typo in Apple's documentation, their data doesn't
        // actually return this attribute for the example I picked and the description of the field references music videos, further increasingly the likelihood that it's just a typo):
        albumName?: string | undefined;
        artistName: string;
        artwork?: Artwork | undefined;
        upc: string;
        contentRating?: 'clean' | 'explicit' | undefined;
        copyright?: string | undefined;
        editorialNotes?: EditorialNotes | undefined;
        genreNames: string[];
        isCompilation: boolean;
        isComplete: boolean;
        isSingle: boolean;
        name: string;
        playParams?: PlayParameters | undefined;
        recordLabel: string;
        releaseDate: string;
        trackCount: number;
        url: string;
        isMasteredForItunes: boolean;
      }
    | undefined;
  relationships?: AlbumRelationships | undefined;
  type: 'albums';
}

// https://developer.apple.com/documentation/applemusicapi/album/relationships
export interface AlbumRelationships {
  artists: Relationship<Artist>;
  tracks: Relationship<Song>;
  genres?: Relationship<Genre> | undefined;
}

// https://developer.apple.com/documentation/applemusicapi/genre
export interface Genre extends Resource {
  attributes: {
    name: string;
  };
  type: 'genres';
}

// https://developer.apple.com/documentation/applemusicapi/playlist
export interface Playlist extends Resource {
  attributes?:
    | {
        artwork?: Artwork | undefined;
        curatorName?: string | undefined;
        description?: EditorialNotes | undefined;
        lastModifiedDate: string;
        // `isChart` is not currently mentioned in the apple music api documentation:
        isChart?: boolean | undefined;
        name: string;
        playParams?: PlayParameters | undefined;
        playlistType: 'user-shared' | 'editorial' | 'external' | 'personal-mix';
        url: string;
      }
    | undefined;

  relationships?:
    | {
        curator: Relationship<Curator>;
        tracks?: Relationship<Song> | undefined;
      }
    | undefined;
  type: 'playlists';
}

// https://developer.apple.com/documentation/applemusicapi/curator
export interface Curator extends Resource {
  attributes?:
    | {
        artwork?: Artwork | undefined;
        editorialNotes?: EditorialNotes | undefined;
        name: string;
        url: string;
      }
    | undefined;
  relationships?:
    | {
        playlists?: Relationship<Playlist> | undefined;
      }
    | undefined;
  type: 'apple-curators';
}

export interface Storefront {
  id: string;
  type: string;
  href: string;
  attributes: {
    supportedLanguageTags: string[];
    defaultLanguageTag: string;
    name: string;
    explicitContentPolicy: string;
  };
}

export interface SearchResultSection<T> {
  href: string;
  next?: string;
  data: T[];
}
