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
    console.log('mock request spotify album');
    return handleSpotifyAlbumMockRequests(url, options);
  } else if (url.includes('/v1/artists')) {
    console.log('mock request spotify artist');
    return handleSpotifyArtistMockRequests(url, options);
  } else if (url.includes('/v1/playlists') && !url.includes('/followers')) {
    console.log('mock request spotify playlist');
    return handleSpotifyPlaylistMockRequests(url, options);
  } else if (url.includes('/v1/users') && url.includes('/playlists')) {
    console.log('mock request spotify user playlists');
    return handleSpotifyPlaylistMockRequests(url, options);
  } else if (url.includes('/v1/playlists') && url.includes('/followers')) {
    console.log('mock request spotify playlist followers');
    return handleSpotifyUserMockRequests(url, options);
  } else if (
    url.includes('/v1/tracks') ||
    url.includes('/v1/audio-features') ||
    url.includes('/v1/recommendations') ||
    url.includes('/v1/me/tracks')
  ) {
    console.log('mock request spotify track');
    return handleSpotifyTrackMockRequests(url, options);
  } else if (url.includes('/v1/search')) {
    console.log('mock request spotify search');
    return handleSpotifySearchMockRequest(url, options);
  } else if (url.includes('/v1/users') || url.includes('/v1/me')) {
    console.log('mock request spotify user');
    return handleSpotifyUserMockRequests(url, options);
  } else if (url.includes('/v1/me/following')) {
    console.log('mock request spotify following');
    return handleSpotifyUserMockRequests(url, options);
  }
}
