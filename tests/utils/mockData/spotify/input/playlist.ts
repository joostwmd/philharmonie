export const spotifyPlaylistIdInput = '5k8xjLPpBzmVuTSGtSUqcp';

export const spotifyPlaylistChangeDetailsInput = {
  playlistId: spotifyPlaylistIdInput,
  details: {
    name: 'New Playlist Name',
    description: 'New Playlist Description',
    public: false,
  },
};

export const spotifyPlaylistGetItems = {
  playlistId: spotifyPlaylistIdInput,
  limit: 20,
  offset: 0,
  fields: '',
  additional_types: 'track',
};

export const spotifyUpdatePlaylistItems = {
  playlistId: spotifyPlaylistIdInput,
  options: {
    uris: [],
    range_start: 0,
    insert_before: 0,
    range_length: 0,
    snapshot_id: '',
  },
};

export const spotifyAddItemsToPlaylist = {
  playlistId: spotifyPlaylistIdInput,
  uris: [],
  position: 0,
};

export const spotifyRemoveItemsFromPlaylist = {
  playlistId: spotifyPlaylistIdInput,
  tracks: [{ uri: '' }],
  snapshot_id: '',
};

export const spotifyGetCurrentUserPlaylists = {
  limit: 20,
  offset: 0,
};

export const spotifyGetUserPlaylists = {
  userId: 'user_id',
  limit: 20,
  offset: 0,
};

export const spotifyCreatePlaylist = {
  userId: 'user_id',
  name: 'New Playlist Name',
  options: {
    public: false,
    collaborative: false,
    description: 'New Playlist Description',
  },
};

export const spotifyAddCoverImage = {
  playlistId: spotifyPlaylistIdInput,
  imageData: 'imageData',
};
