import { handleAppleMusicAlbumMockRequests } from './methods/album';
import { handleAppleMusicPlaylistMockRequests } from './methods/playlist';
import { handleAppleMusicSearchMockRequest } from './methods/search';
import { handleAppleMusicSongMockRequests } from './methods/song';
import { handleAppleMusicUserMockRequests } from './methods/user';

export async function handleAppleMusicMockFetch(
  url: string,
  options?: RequestInit,
) {
  console.log('apple music mock fetch main function');

  if (url.includes('/v1/catalog') && url.includes('/search')) {
    console.log('mock request apple music search');
    return handleAppleMusicSearchMockRequest(url, options);
  } else if (
    (url.includes('/v1/catalog') && url.includes('/songs')) ||
    (url.includes('/v1/me/library') && url.includes('/songs')) ||
    (url.includes('/v1/me/library') && url.includes('ids%5Btracks%5D'))
  ) {
    console.log('mock request apple music songs index file');
    return handleAppleMusicSongMockRequests(url, options);
  } else if (
    (url.includes('/v1/catalog') && url.includes('/albums')) ||
    (url.includes('/v1/me/library') && url.includes('/albums')) ||
    (url.includes('/v1/me/library') && url.includes('ids%5Balbums%5D'))
  ) {
    console.log('mock request apple music album');
    return handleAppleMusicAlbumMockRequests(url, options);
  } else if (
    (url.includes('/v1/me/library') && url.includes('/playlists')) ||
    url.includes('/v1/me/library/playlists')
  ) {
    console.log('mock request apple music library playlists');
    return handleAppleMusicPlaylistMockRequests(url, options);
  } else if (url.includes('/v1/me/storefront')) {
    console.log('mock request apple music user storefront');
    return handleAppleMusicUserMockRequests(url, options);
  }

  console.log('mock request apple music could not categorize index file');
}
