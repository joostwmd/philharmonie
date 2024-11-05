import type { SpotifyApi } from '../../../../../src/conductor/providers/spotify/types/typed';

export const spotifyUserProfileResponse: SpotifyApi.UserProfileResponse = {
  display_name: 'Sample User',
  external_urls: { spotify: 'https://open.spotify.com/user/sample' },
  followers: { href: null, total: 1000 },
  href: 'https://api.spotify.com/v1/users/sample',
  id: 'sample',
  images: [
    { height: 640, url: 'https://example.com/user_image1.jpg', width: 640 },
  ],
  type: 'user',
  uri: 'spotify:user:sample',
};

export const spotifyCurrentUsersProfileResponse: SpotifyApi.CurrentUsersProfileResponse =
  {
    country: 'US',
    display_name: 'Sample User',
    email: 'sample@example.com',
    external_urls: { spotify: 'https://open.spotify.com/user/sample' },
    followers: { href: null, total: 1000 },
    href: 'https://api.spotify.com/v1/me',
    id: 'sample',
    images: [
      { height: 640, url: 'https://example.com/user_image1.jpg', width: 640 },
    ],
    product: 'premium',
    type: 'user',
    uri: 'spotify:user:sample',
    birthdate: '1990-01-01',
  };

export const spotifyUsersTopArtistsResponse: SpotifyApi.UsersTopArtistsResponse =
  {
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
    total: 1,
    limit: 20,
    offset: 0,
    href: 'https://api.spotify.com/v1/me/top/artists',
    previous: null,
    next: null,
  };

export const spotifyUsersTopTracksResponse: SpotifyApi.UsersTopTracksResponse =
  {
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
        external_ids: {
          isrc: 'sample_isrc',
          ean: 'sample_ean',
          upc: 'sample_upc',
        },
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
      // Add more track objects as needed
    ],
    total: 1,
    limit: 20,
    offset: 0,
    href: 'https://api.spotify.com/v1/me/top/tracks',
    previous: null,
    next: null,
  };

export const spotifyUsersFollowedArtistsResponse: SpotifyApi.UsersFollowedArtistsResponse =
  {
    artists: {
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
        // Add more artist objects as needed
      ],
      next: null,
      total: 1,
      cursors: { after: 'sample_cursor' },
      limit: 20,
      href: 'https://api.spotify.com/v1/me/following?type=artist',
    },
  };

export const spotifyUserFollowsUsersOrArtistsResponse: SpotifyApi.UserFollowsUsersOrArtistsResponse =
  [true, false];

export const spotifyUsersFollowPlaylistResponse: SpotifyApi.UsersFollowPlaylistResponse =
  [true, false];
