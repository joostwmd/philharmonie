// types/input.ts

export type TGetMultipleAlbumsByUPCInput = {
  storefront: string;
  upcs: string[];
  localization?: string;
};

export type TCreatePlaylistInput = {
  name: string;
  description: string;
  localization?: string;
};

export type TAddTracksToPlaylistInput = {
  playlistId: string;
  trackIds: string[];
  localization?: string;
};

export type TGetSongInput = {
  songId: string;
  storefront: string;
};

export type TGetAlbumInput = {
  albumId: string;
  storefront: string;
};

export type TGetPlaylistInput = {
  playlistId: string;
  storefront: string;
};

export type TSearchSongsInput = {
  term: string;
  storefront: string;
};

export type TSearchAlbumsInput = {
  term: string;
  storefront: string;
};

export type TSearchPlaylistsInput = {
  term: string;
  storefront: string;
};

export type TSearchCatalogItemInput = {
  term: string; // Required
  types: string[]; // Required
  storefront: string; // Required
  limit?: number; // Optional, default is 5
  offset?: string; // Optional
  localization?: string; // Optional, corresponds to 'l' parameter
  with?: string[]; // Optional
};
