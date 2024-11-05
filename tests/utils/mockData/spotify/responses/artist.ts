import type { SpotifyApi } from '../../../../../src/conductor/providers/spotify/types/typed';

export const spotifySingleArtistResponse: SpotifyApi.SingleArtistResponse = {
  external_urls: { spotify: 'https://open.spotify.com/artist/1' },
  followers: { href: null, total: 1000 },
  genres: ['Genre1', 'Genre2'],
  href: 'https://api.spotify.com/v1/artists/1',
  id: '1',
  images: [
    { height: 640, url: 'https://i.scdn.co/image/1', width: 640 },
    { height: 300, url: 'https://i.scdn.co/image/2', width: 300 },
    { height: 64, url: 'https://i.scdn.co/image/3', width: 64 },
  ],
  name: 'Artist Name',
  popularity: 80,
  type: 'artist',
  uri: 'spotify:artist:1',
};

export const spotifyMultipleArtistsResponse: SpotifyApi.MultipleArtistsResponse =
  {
    artists: [
      {
        external_urls: { spotify: 'https://open.spotify.com/artist/1' },
        followers: { href: null, total: 1000 },
        genres: ['Genre1', 'Genre2'],
        href: 'https://api.spotify.com/v1/artists/1',
        id: '1',
        images: [
          { height: 640, url: 'https://i.scdn.co/image/1', width: 640 },
          { height: 300, url: 'https://i.scdn.co/image/2', width: 300 },
          { height: 64, url: 'https://i.scdn.co/image/3', width: 64 },
        ],
        name: 'Artist Name',
        popularity: 80,
        type: 'artist',
        uri: 'spotify:artist:1',
      },
      // Add more artist objects as needed
    ],
  };

export const spotifyArtistsAlbumsResponse: SpotifyApi.ArtistsAlbumsResponse = {
  href: 'https://api.spotify.com/v1/artists/1/albums',
  items: [
    {
      album_group: 'album',
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
      href: 'https://api.spotify.com/v1/albums/1',
      id: '1',
      images: [
        { height: 640, url: 'https://i.scdn.co/image/1', width: 640 },
        { height: 300, url: 'https://i.scdn.co/image/2', width: 300 },
        { height: 64, url: 'https://i.scdn.co/image/3', width: 64 },
      ],
      name: 'Album Name',
      release_date: '2023-01-01',
      release_date_precision: 'day',
      total_tracks: 10,
      type: 'album',
      uri: 'spotify:album:1',
      external_urls: { spotify: 'https://open.spotify.com/album/1' },
    },
  ],
  limit: 20,
  next: null,
  offset: 0,
  previous: null,
  total: 1,
};

export const spotifyArtistsTopTracksResponse: SpotifyApi.ArtistsTopTracksResponse =
  {
    tracks: [
      {
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
          href: 'https://api.spotify.com/v1/albums/1',
          id: '1',
          images: [
            { height: 640, url: 'https://i.scdn.co/image/1', width: 640 },
            { height: 300, url: 'https://i.scdn.co/image/2', width: 300 },
            { height: 64, url: 'https://i.scdn.co/image/3', width: 64 },
          ],
          name: 'Album Name',
          release_date: '2023-01-01',
          release_date_precision: 'day',
          total_tracks: 10,
          type: 'album',
          uri: 'spotify:album:1',
          external_urls: { spotify: 'https://open.spotify.com/album/1' },
        },
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
        external_ids: { isrc: 'US1234567890' },
        external_urls: { spotify: 'https://open.spotify.com/track/1' },
        href: 'https://api.spotify.com/v1/tracks/1',
        id: '1',
        is_playable: true,
        name: 'Track Name',
        popularity: 80,
        preview_url: 'https://p.scdn.co/mp3-preview/1',
        track_number: 1,
        type: 'track',
        uri: 'spotify:track:1',
      },
    ],
  };

export const spotifyArtistsRelatedArtistsResponse: SpotifyApi.ArtistsRelatedArtistsResponse =
  {
    artists: [
      {
        external_urls: { spotify: 'https://open.spotify.com/artist/2' },
        followers: { href: null, total: 2000 },
        genres: ['Genre3', 'Genre4'],
        href: 'https://api.spotify.com/v1/artists/2',
        id: '2',
        images: [
          { height: 640, url: 'https://i.scdn.co/image/4', width: 640 },
          { height: 300, url: 'https://i.scdn.co/image/5', width: 300 },
          { height: 64, url: 'https://i.scdn.co/image/6', width: 64 },
        ],
        name: 'Related Artist Name',
        popularity: 70,
        type: 'artist',
        uri: 'spotify:artist:2',
      },
      // Add more related artist objects as needed
    ],
  };
