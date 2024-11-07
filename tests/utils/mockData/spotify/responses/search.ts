import type { SpotifyApi } from '../../../../../src/conductor/providers/spotify/types/typed';

export const spotifySearchResponse: SpotifyApi.SearchResponse = {
  albums: {
    href: 'https://api.spotify.com/v1/search?query=sample&type=album',
    items: [
      {
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
        external_urls: { spotify: 'https://open.spotify.com/album/sample' },
      },
    ],
    limit: 20,
    next: null,
    offset: 0,
    previous: null,
    total: 1,
  },
  artists: {
    href: 'https://api.spotify.com/v1/search?query=sample&type=artist',
    items: [
      {
        external_urls: { spotify: 'https://open.spotify.com/artist/sample' },
        followers: { href: null, total: 1000 },
        genres: ['Genre1', 'Genre2'],
        href: 'https://api.spotify.com/v1/artists/sample',
        id: 'sample',
        images: [
          {
            height: 640,
            url: 'https://example.com/artist_image1.jpg',
            width: 640,
          },
          {
            height: 300,
            url: 'https://example.com/artist_image2.jpg',
            width: 300,
          },
          {
            height: 64,
            url: 'https://example.com/artist_image3.jpg',
            width: 64,
          },
        ],
        name: 'Sample Artist',
        popularity: 80,
        type: 'artist',
        uri: 'spotify:artist:sample',
      },
    ],
    limit: 20,
    next: null,
    offset: 0,
    previous: null,
    total: 1,
  },
  playlists: {
    href: 'https://api.spotify.com/v1/search?query=sample&type=playlist',
    items: [
      {
        collaborative: false,
        description: 'Sample playlist description',
        external_urls: { spotify: 'https://open.spotify.com/playlist/sample' },
        href: 'https://api.spotify.com/v1/playlists/sample',
        id: 'sample',
        images: [
          {
            height: 640,
            url: 'https://example.com/playlist_image1.jpg',
            width: 640,
          },
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
  },
  tracks: {
    href: 'https://api.spotify.com/v1/search?query=sample&type=track',
    items: [
      {
        album: {
          external_urls: {
            spotify: 'https://open.spotify.com/album/sample',
          },
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
        },
        external_ids: {
          isrc: 'sample_isrc',
          ean: 'sample_ean',
          upc: 'sample_upc',
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
    ],
    limit: 20,
    next: null,
    offset: 0,
    previous: null,
    total: 1,
  },
};
