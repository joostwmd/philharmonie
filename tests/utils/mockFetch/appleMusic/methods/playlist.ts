import { appleMusicMockTrackIds } from '../../../mockData/appleMusic/input';
import { appleMusicPlaylistResponses } from '../../../mockData/appleMusic/responses/playlist';
import { appleMusicSongResponse } from '../../../mockData/appleMusic/responses/song';
import { validateRequest, createMockSuccessResponse } from '../../hepler';
import { APPLE_MUSIC_URL_PARAMS } from '../costants';

export function handleAppleMusicPlaylistMockRequests(
  url: string,
  options?: RequestInit,
) {
  if (
    url.includes('/v1/me/library/playlists/') &&
    url.includes('/tracks') &&
    options?.method === 'GET'
  ) {
    console.log('handleAppleMusicPlaylistMockRequests get playlist tracks');
    // get playlist tracks
    const errorResponse = validateRequest({
      intendedMethod: 'GET',
      usedMethod: options?.method,
      intendedParams: [],
      url,
    });
    if (errorResponse) return errorResponse;
    return createMockSuccessResponse(appleMusicSongResponse);
  } else if (
    url.includes('/v1/me/library/playlists/') &&
    options?.method === 'GET'
  ) {
    console.log(
      'handleAppleMusicPlaylistMockRequests get library playlist by ID',
    );
    // get single library playlist by ID
    const errorResponse = validateRequest({
      intendedMethod: 'GET',
      usedMethod: options?.method,
      intendedParams: [
        APPLE_MUSIC_URL_PARAMS.localization,
        APPLE_MUSIC_URL_PARAMS.include,
        APPLE_MUSIC_URL_PARAMS.extend,
      ],
      url,
    });
    if (errorResponse) return errorResponse;
    return createMockSuccessResponse(appleMusicPlaylistResponses);
  } else if (
    url.includes('/v1/me/library/playlists') &&
    options?.method === 'POST' &&
    !url.includes('/tracks')
  ) {
    console.log('handleAppleMusicPlaylistMockRequests create library playlist');
    // create a new library playlist
    const errorResponse = validateRequest({
      intendedMethod: 'POST',
      usedMethod: options?.method,
      intendedParams: [APPLE_MUSIC_URL_PARAMS.localization],
      url,
      usedBody: options?.body,
      intendedBody: {
        attributes: {
          name: 'test playlist',
          description: 'test description',
        },
      },
    });
    if (errorResponse) return errorResponse;
    return createMockSuccessResponse(appleMusicPlaylistResponses);
  } else if (
    url.includes('/v1/me/library/playlists') &&
    options?.method === 'GET'
  ) {
    console.log('handleAppleMusicPlaylistMockRequests get library playlists');
    // get all library playlists
    const errorResponse = validateRequest({
      intendedMethod: 'GET',
      usedMethod: options?.method,
      intendedParams: [
        APPLE_MUSIC_URL_PARAMS.include,
        APPLE_MUSIC_URL_PARAMS.localization,
        APPLE_MUSIC_URL_PARAMS.limit,
        APPLE_MUSIC_URL_PARAMS.offset,
        APPLE_MUSIC_URL_PARAMS.extend,
      ],
      url,
    });
    if (errorResponse) return errorResponse;
    return createMockSuccessResponse(appleMusicPlaylistResponses);
  } else if (
    options?.method === 'POST' &&
    url.includes('/v1/me/library/playlists') &&
    url.includes('/tracks')
  ) {
    //add track to library playlist
    console.log(
      'handleAppleMusicPlaylistMockRequests add track to library playlist',
    );

    const errorResponse = validateRequest({
      intendedMethod: 'POST',
      usedMethod: options?.method,
      intendedParams: [APPLE_MUSIC_URL_PARAMS.localization],
      url,
      usedBody: options?.body,
      intendedBody: {
        data: appleMusicMockTrackIds.map((trackId) => ({
          id: trackId,
          type: 'songs',
        })),
      },
    });
    if (errorResponse) return errorResponse;
    return createMockSuccessResponse(null);
  }

  console.log('handleAppleMusicPlaylistMockRequests could not categorize');
}
