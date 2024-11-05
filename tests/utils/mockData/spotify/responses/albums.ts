import type { SpotifyApi } from '../../../../../src/conductor/providers/spotify/types/typed';

export const spotifySingleAlbumResponse: SpotifyApi.SingleAlbumResponse = {
  album_type: 'album',
  artists: [
    {
      external_urls: { spotify: 'https://open.spotify.com/artist/1' },
      href: 'https://api.spotify.com/v1/artists/1',
      id: '1',
      name: 'Artist Name',
      type: 'artist',
      uri: 'spotify:artist:1',
    },
  ],
  available_markets: ['US', 'CA'],
  copyrights: [
    { text: '© 2023 Record Label', type: 'C' },
    { text: '℗ 2023 Record Label', type: 'P' },
  ],
  external_ids: { upc: '123456789012' },
  external_urls: { spotify: 'https://open.spotify.com/album/1' },
  genres: ['Rock', 'Pop'],
  href: 'https://api.spotify.com/v1/albums/1',
  id: '1',
  images: [
    { height: 640, url: 'https://i.scdn.co/image/1', width: 640 },
    { height: 300, url: 'https://i.scdn.co/image/2', width: 300 },
    { height: 64, url: 'https://i.scdn.co/image/3', width: 64 },
  ],
  label: 'Record Label',
  name: 'Album Name',
  popularity: 80,
  release_date: '2023-01-01',
  release_date_precision: 'day',
  total_tracks: 10,
  tracks: {
    href: 'https://api.spotify.com/v1/albums/1/tracks',
    items: [
      {
        artists: [
          {
            external_urls: { spotify: 'https://open.spotify.com/artist/1' },
            href: 'https://api.spotify.com/v1/artists/1',
            id: '1',
            name: 'Artist Name',
            type: 'artist',
            uri: 'spotify:artist:1',
          },
        ],
        available_markets: ['US', 'CA'],
        disc_number: 1,
        duration_ms: 200000,
        explicit: false,
        external_urls: { spotify: 'https://open.spotify.com/track/1' },
        href: 'https://api.spotify.com/v1/tracks/1',
        id: '1',
        name: 'Track Name',
        preview_url: 'https://p.scdn.co/mp3-preview/1',
        track_number: 1,
        type: 'track',
        uri: 'spotify:track:1',
      },
    ],
    limit: 50,
    next: null,
    offset: 0,
    previous: null,
    total: 10,
  },
  type: 'album',
  uri: 'spotify:album:1',
};

export const spotifySeveralAlbumsResponse: SpotifyApi.MultipleAlbumsResponse = {
  albums: [
    {
      album_type: 'album',
      artists: [
        {
          external_urls: { spotify: 'https://open.spotify.com/artist/1' },
          href: 'https://api.spotify.com/v1/artists/1',
          id: '1',
          name: 'Artist Name',
          type: 'artist',
          uri: 'spotify:artist:1',
        },
      ],
      available_markets: ['US', 'CA'],
      copyrights: [
        { text: '© 2023 Record Label', type: 'C' },
        { text: '℗ 2023 Record Label', type: 'P' },
      ],
      external_ids: { upc: '123456789012' },
      external_urls: { spotify: 'https://open.spotify.com/album/1' },
      genres: ['Rock', 'Pop'],
      href: 'https://api.spotify.com/v1/albums/1',
      id: '1',
      images: [
        { height: 640, url: 'https://i.scdn.co/image/1', width: 640 },
        { height: 300, url: 'https://i.scdn.co/image/2', width: 300 },
        { height: 64, url: 'https://i.scdn.co/image/3', width: 64 },
      ],
      label: 'Record Label',
      name: 'Album Name',
      popularity: 80,
      release_date: '2023-01-01',
      release_date_precision: 'day',
      total_tracks: 10,
      tracks: {
        href: 'https://api.spotify.com/v1/albums/1/tracks',
        items: [
          {
            artists: [
              {
                external_urls: { spotify: 'https://open.spotify.com/artist/1' },
                href: 'https://api.spotify.com/v1/artists/1',
                id: '1',
                name: 'Artist Name',
                type: 'artist',
                uri: 'spotify:artist:1',
              },
            ],
            available_markets: ['US', 'CA'],
            disc_number: 1,
            duration_ms: 200000,
            explicit: false,
            external_urls: { spotify: 'https://open.spotify.com/track/1' },
            href: 'https://api.spotify.com/v1/tracks/1',
            id: '1',
            name: 'Track Name',
            preview_url: 'https://p.scdn.co/mp3-preview/1',
            track_number: 1,
            type: 'track',
            uri: 'spotify:track:1',
          },
        ],
        limit: 50,
        next: null,
        offset: 0,
        previous: null,
        total: 10,
      },
      type: 'album',
      uri: 'spotify:album:1',
    },
  ],
};

export const spotifyAlbumTracksResponse: SpotifyApi.AlbumTracksResponse = {
  href: 'https://api.spotify.com/v1/albums/1/tracks',
  items: [
    {
      artists: [
        {
          external_urls: { spotify: 'https://open.spotify.com/artist/1' },
          href: 'https://api.spotify.com/v1/artists/1',
          id: '1',
          name: 'Artist Name',
          type: 'artist',
          uri: 'spotify:artist:1',
        },
      ],
      available_markets: ['US', 'CA'],
      disc_number: 1,
      duration_ms: 200000,
      explicit: false,
      external_urls: { spotify: 'https://open.spotify.com/track/1' },
      href: 'https://api.spotify.com/v1/tracks/1',
      id: '1',
      name: 'Track Name',
      preview_url: 'https://p.scdn.co/mp3-preview/1',
      track_number: 1,
      type: 'track',
      uri: 'spotify:track:1',
    },
    // Add more track objects as needed
  ],
  limit: 50,
  next: null,
  offset: 0,
  previous: null,
  total: 10,
};

export const spotifyUsersSavedAlbumsResponse: SpotifyApi.UsersSavedAlbumsResponse =
  {
    href: 'https://api.spotify.com/v1/me/albums',
    limit: 20,
    next: 'https://api.spotify.com/v1/me/albums?offset=20&limit=20',
    offset: 0,
    previous: null,
    total: 100,
    items: [
      {
        added_at: '2023-01-01T00:00:00Z',
        album: {
          album_type: 'album',
          artists: [
            {
              external_urls: { spotify: 'https://open.spotify.com/artist/1' },
              href: 'https://api.spotify.com/v1/artists/1',
              id: '1',
              name: 'Artist Name',
              type: 'artist',
              uri: 'spotify:artist:1',
            },
          ],
          available_markets: ['US', 'CA'],
          external_ids: { upc: '123456789012' },
          external_urls: { spotify: 'https://open.spotify.com/album/1' },
          genres: ['Genre1', 'Genre2'],
          href: 'https://api.spotify.com/v1/albums/1',
          id: '1',
          images: [
            { height: 640, url: 'https://i.scdn.co/image/1', width: 640 },
            { height: 300, url: 'https://i.scdn.co/image/2', width: 300 },
            { height: 64, url: 'https://i.scdn.co/image/3', width: 64 },
          ],
          label: 'Label Name',
          name: 'Album Name',
          popularity: 80,
          release_date: '2023-01-01',
          release_date_precision: 'day',
          total_tracks: 10,
          tracks: {
            href: 'https://api.spotify.com/v1/albums/1/tracks',
            items: [
              {
                artists: [
                  {
                    external_urls: {
                      spotify: 'https://open.spotify.com/artist/1',
                    },
                    href: 'https://api.spotify.com/v1/artists/1',
                    id: '1',
                    name: 'Artist Name',
                    type: 'artist',
                    uri: 'spotify:artist:1',
                  },
                ],
                available_markets: ['US', 'CA'],
                disc_number: 1,
                duration_ms: 200000,
                explicit: false,
                external_urls: { spotify: 'https://open.spotify.com/track/1' },
                href: 'https://api.spotify.com/v1/tracks/1',
                id: '1',
                name: 'Track Name',
                preview_url: 'https://p.scdn.co/mp3-preview/1',
                track_number: 1,
                type: 'track',
                uri: 'spotify:track:1',
              },
            ],
            limit: 50,
            next: null,
            offset: 0,
            previous: null,
            total: 10,
          },
          type: 'album',
          uri: 'spotify:album:1',
          copyrights: [
            {
              text: '© 2023 Record Label',
              type: 'C',
            },
            {
              text: '℗ 2023 Record Label',
              type: 'P',
            },
          ],
        },
      },
    ],
  };

export const spotifyCheckUsersSavedAlbumsResponse = [true, false, true];
