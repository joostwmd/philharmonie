import type {
  ISpotifyAlbum,
  ISpotifyArtist,
  ISpotifyAudioFeatures,
  ISpotifyCurrentUser,
  ISpotifyCursorPagingObject,
  ISpotifyPagingObject,
  ISpotifyPlaylist,
  ISpotifyPlaylistTrack,
  ISpotifyRecommendation,
  ISpotifySavedAlbum,
  ISpotifySavedTrack,
  ISpotifySearchResults,
  ISpotifySimplifiedPlaylist,
  ISpotifyTrack,
  ISpotifyTrackWithAlbum,
  ISpotifyUser,
} from './base';

export type TGetAlbumByIdResponse = ISpotifyAlbum;

export type TGetSeveralAlbumsByIdsResponse = { albums: ISpotifyAlbum[] };

export type TGetAlbumTracksResponse = ISpotifyCursorPagingObject<ISpotifyTrack>;

export type TGetUsersSavedAlbumsResponse =
  ISpotifyPagingObject<ISpotifySavedAlbum>;

export type TGetArtistByIdResponse = ISpotifyArtist;

export type TGetSeveralArtistsByIdsResponse = { artists: ISpotifyArtist[] };

export type TGetArtistsAlbumsResponse = ISpotifyPagingObject<ISpotifyAlbum>;

export type TGetArtistsTopTracksResponse = {
  tracks: ISpotifyTrack[];
};

export type TGetArtistsRelatedArtistsResponse = {
  artists: ISpotifyArtist[];
};

export type TGetPlaylistByIdResponse = ISpotifyPlaylist;

export type TGetPlaylistItemsResponse =
  ISpotifyPagingObject<ISpotifyPlaylistTrack>;

export type TPlaylistSnapshotResponse = {
  snapshot_id: string;
};

export type TGetUsersPlaylistsResponse =
  ISpotifyPagingObject<ISpotifySimplifiedPlaylist>;

export type TCreatePlaylistRetrun = ISpotifyPlaylist;

export type TGetTrackByIdResponse = ISpotifyTrackWithAlbum;

export type TGetSeveralTracksByIdsResponse = {
  tracks: ISpotifyTrackWithAlbum[];
};

export type TGetUsersSavedTracksResponse =
  ISpotifyPagingObject<ISpotifySavedTrack>;

export type TGetAudioFeaturesByIdResponse = ISpotifyAudioFeatures;

export type TGetSeveralAudioFeaturesByIdsResponse = {
  audio_features: ISpotifyAudioFeatures[];
};

export type TGetRecommendationsResponse = ISpotifyRecommendation;

export type TGetCurrentUserResponse = ISpotifyCurrentUser;

export type TGetUsersByIdResponse = ISpotifyUser;

export type TGetUsersTopItemsResponse = ISpotifyPagingObject<
  ISpotifyArtist | ISpotifyTrack
>;

export type TGetFollowedArtistsResponse = {
  artists: ISpotifyCursorPagingObject<ISpotifyArtist>;
};

export type TSearchResponse = ISpotifySearchResults;
