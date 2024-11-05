import type { SpotifyApi } from '../../../../../src/conductor/providers/spotify/types/typed';

export const spotifySinglePlaylistResponse: SpotifyApi.SinglePlaylistResponse =
  {
    collaborative: false,
    description: 'Sample playlist description',
    external_urls: { spotify: 'https://open.spotify.com/playlist/sample' },
    followers: { href: null, total: 1000 },
    href: 'https://api.spotify.com/v1/playlists/sample',
    id: 'sample',
    images: [
      { height: 640, url: 'https://example.com/image1.jpg', width: 640 },
      { height: 300, url: 'https://example.com/image2.jpg', width: 300 },
      { height: 64, url: 'https://example.com/image3.jpg', width: 64 },
    ],
    name: 'Sample Playlist',
    owner: {
      display_name: 'Sample User',
      external_urls: { spotify: 'https://open.spotify.com/user/sample' },
      href: 'https://api.spotify.com/v1/users/sample',
      id: 'sample',
      type: 'user',
      uri: 'spotify:user:sample',
    },
    public: true,
    snapshot_id: 'sample_snapshot_id',
    tracks: {
      href: 'https://api.spotify.com/v1/playlists/sample/tracks',
      items: [
        {
          added_at: '2023-01-01T00:00:00Z',
          added_by: {
            external_urls: { spotify: 'https://open.spotify.com/user/sample' },
            href: 'https://api.spotify.com/v1/users/sample',
            id: 'sample',
            type: 'user',
            uri: 'spotify:user:sample',
          },
          is_local: false,
          track: {
            external_ids: {
              isrc: 'sample_isrc',
              ean: 'sample_ean',
              upc: 'sample_upc',
            },
            album: {
              album_type: 'album',
              artists: [
                {
                  external_urls: {
                    spotify: 'https://open.spotify.com/artist/sample',
                  },
                  href: 'https://api.spotify.com/v1/artists/sample',
                  id: 'sample',
                  name: 'Sample Artist',
                  type: 'artist',
                  uri: 'spotify:artist:sample',
                },
              ],
              available_markets: ['US', 'CA'],
              href: 'https://api.spotify.com/v1/albums/sample',
              id: 'sample',
              images: [
                {
                  height: 640,
                  url: 'https://example.com/album_image1.jpg',
                  width: 640,
                },
                {
                  height: 300,
                  url: 'https://example.com/album_image2.jpg',
                  width: 300,
                },
                {
                  height: 64,
                  url: 'https://example.com/album_image3.jpg',
                  width: 64,
                },
              ],
              name: 'Sample Album',
              release_date: '2023-01-01',
              release_date_precision: 'day',
              total_tracks: 10,
              type: 'album',
              uri: 'spotify:album:sample',
              external_urls: {
                spotify: 'https://open.spotify.com/album/sample',
              },
            },
            artists: [
              {
                external_urls: {
                  spotify: 'https://open.spotify.com/artist/sample',
                },
                href: 'https://api.spotify.com/v1/artists/sample',
                id: 'sample',
                name: 'Sample Artist',
                type: 'artist',
                uri: 'spotify:artist:sample',
              },
            ],
            available_markets: ['US', 'CA'],
            disc_number: 1,
            duration_ms: 200000,
            explicit: false,
            external_urls: { spotify: 'https://open.spotify.com/track/sample' },
            href: 'https://api.spotify.com/v1/tracks/sample',
            id: 'sample',
            is_playable: true,
            name: 'Sample Track',
            popularity: 80,
            preview_url: 'https://example.com/track_preview.mp3',
            track_number: 1,
            type: 'track',
            uri: 'spotify:track:sample',
          },
        },
      ],
      limit: 20,
      next: null,
      offset: 0,
      previous: null,
      total: 1,
    },
    type: 'playlist',
    uri: 'spotify:playlist:sample',
  };

export const spotifyPlaylistSnapshotResponse: SpotifyApi.PlaylistSnapshotResponse =
  {
    snapshot_id: 'sample_snapshot_id',
  };

export const spotifyListOfCurrentUsersPlaylistsResponse: SpotifyApi.ListOfCurrentUsersPlaylistsResponse =
  {
    href: 'https://api.spotify.com/v1/me/playlists',
    items: [
      {
        collaborative: false,
        description: 'Sample playlist description',
        external_urls: { spotify: 'https://open.spotify.com/playlist/sample' },
        href: 'https://api.spotify.com/v1/playlists/sample',
        id: 'sample',
        images: [
          { height: 640, url: 'https://example.com/image1.jpg', width: 640 },
        ],
        name: 'Sample Playlist',
        owner: {
          display_name: 'Sample User',
          external_urls: { spotify: 'https://open.spotify.com/user/sample' },
          href: 'https://api.spotify.com/v1/users/sample',
          id: 'sample',
          type: 'user',
          uri: 'spotify:user:sample',
        },
        public: true,
        snapshot_id: 'sample_snapshot_id',
        tracks: {
          href: 'https://api.spotify.com/v1/playlists/sample/tracks',
          total: 10,
        },
        type: 'playlist',
        uri: 'spotify:playlist:sample',
      },
    ],
    limit: 20,
    next: null,
    offset: 0,
    previous: null,
    total: 1,
  };

export const spotifyListOfUsersPlaylistsResponse: SpotifyApi.ListOfUsersPlaylistsResponse =
  {
    href: 'https://api.spotify.com/v1/users/sample/playlists',
    items: [
      {
        collaborative: false,
        description: 'Sample playlist description',
        external_urls: { spotify: 'https://open.spotify.com/playlist/sample' },
        href: 'https://api.spotify.com/v1/playlists/sample',
        id: 'sample',
        images: [
          { height: 640, url: 'https://example.com/image1.jpg', width: 640 },
        ],
        name: 'Sample Playlist',
        owner: {
          display_name: 'Sample User',
          external_urls: { spotify: 'https://open.spotify.com/user/sample' },
          href: 'https://api.spotify.com/v1/users/sample',
          id: 'sample',
          type: 'user',
          uri: 'spotify:user:sample',
        },
        public: true,
        snapshot_id: 'sample_snapshot_id',
        tracks: {
          href: 'https://api.spotify.com/v1/playlists/sample/tracks',
          total: 10,
        },
        type: 'playlist',
        uri: 'spotify:playlist:sample',
      },
    ],
    limit: 20,
    next: null,
    offset: 0,
    previous: null,
    total: 1,
  };

export const spotifyCreatePlaylistResponse: SpotifyApi.CreatePlaylistResponse =
  {
    collaborative: false,
    description: 'Sample playlist description',
    external_urls: { spotify: 'https://open.spotify.com/playlist/sample' },
    followers: { href: null, total: 1000 },
    href: 'https://api.spotify.com/v1/playlists/sample',
    id: 'sample',
    images: [
      { height: 640, url: 'https://example.com/image1.jpg', width: 640 },
    ],
    name: 'Sample Playlist',
    owner: {
      display_name: 'Sample User',
      external_urls: { spotify: 'https://open.spotify.com/user/sample' },
      href: 'https://api.spotify.com/v1/users/sample',
      id: 'sample',
      type: 'user',
      uri: 'spotify:user:sample',
    },
    public: true,
    snapshot_id: 'sample_snapshot_id',
    tracks: {
      href: 'https://api.spotify.com/v1/playlists/sample/tracks',
      total: 10,
      offset: 0,
      limit: 20,
      next: null,
      previous: null,
      items: [
        {
          added_at: '2023-01-01T00:00:00Z',
          added_by: {
            external_urls: {
              spotify: 'https://open.spotify.com/user/sample',
            },
            href: 'https://api.spotify.com/v1/users/sample',
            id: 'sample',
            type: 'user',
            uri: 'spotify:user:sample',
          },
          is_local: false,
          track: {
            album: {
              album_type: 'album',
              artists: [
                {
                  external_urls: {
                    spotify: 'https://open.spotify.com/artist/sample',
                  },
                  href: 'https://api.spotify.com/v1/artists/sample',
                  id: 'sample',
                  name: 'Sample Artist',
                  type: 'artist',
                  uri: 'spotify:artist:sample',
                },
              ],
              available_markets: ['US', 'CA'],
              href: 'https://api.spotify.com/v1/albums/sample',
              id: 'sample',
              images: [
                {
                  height: 640,
                  url: 'https://example.com/album_image1.jpg',
                  width: 640,
                },
              ],
              name: 'Sample Album',
              release_date: '2023-01-01',
              release_date_precision: 'day',
              total_tracks: 10,
              type: 'album',
              uri: 'spotify:album:sample',
              external_urls: {
                spotify: 'https://open.spotify.com/album/sample',
              },
            },
            artists: [
              {
                external_urls: {
                  spotify: 'https://open.spotify.com/artist/sample',
                },
                href: 'https://api.spotify.com/v1/artists/sample',
                id: 'sample',
                name: 'Sample Artist',
                type: 'artist',
                uri: 'spotify:artist:sample',
              },
            ],
            available_markets: ['US', 'CA'],
            disc_number: 1,
            duration_ms: 200000,
            explicit: false,
            external_urls: {
              spotify: 'https://open.spotify.com/track/sample',
            },
            href: 'https://api.spotify.com/v1/tracks/sample',
            id: 'sample',
            is_playable: true,
            name: 'Sample Track',
            popularity: 80,
            preview_url: 'https://example.com/track_preview.mp3',
            track_number: 1,
            type: 'track',
            uri: 'spotify:track:sample',
            external_ids: {
              isrc: 'sample_isrc',
              ean: 'sample_ean',
              upc: 'sample_upc',
            },
          },
        },
      ],
    },
    type: 'playlist',
    uri: 'spotify:playlist:sample',
  };
