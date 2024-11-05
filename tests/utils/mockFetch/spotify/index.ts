import { handleSpotifyAlbumMockRequests } from './methods/album';
import { handleSpotifyArtistMockRequests } from './methods/artist';
import { handleSpotifyPlaylistMockRequests } from './methods/playlist';
import { handleSpotifySearchMockRequest } from './methods/search';
import { handleSpotifyTrackMockRequests } from './methods/track';
import { handleSpotifyUserMockRequests } from './methods/user';

export async function handleSpotifyMockFetch(
  url: string,
  options?: RequestInit,
) {
  if (url.includes('/v1/albums') || url.includes('/v1/me/albums')) {
    return handleSpotifyAlbumMockRequests(url, options);
  } else if (
    url.includes('/v1/artists') ||
    url.includes('/v1/me/following?type=artist')
  ) {
    handleSpotifyArtistMockRequests(url, options);
  } else if (
    url.includes('/v1/playlists') ||
    url.includes('/v1/me/playlists')
  ) {
    handleSpotifyPlaylistMockRequests(url, options);
  } else if (
    url.includes('/v1/tracks') ||
    url.includes('/v1/audio-features') ||
    url.includes('/v1/recommendations')
  ) {
    handleSpotifyTrackMockRequests(url, options);
  } else if (url.includes('/v1/search')) {
    handleSpotifySearchMockRequest(url, options);
  } else if (url.includes('/v1/users') || url.includes('/v1/me')) {
    handleSpotifyUserMockRequests(url, options);
  }
}
