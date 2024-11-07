import { describe, it, expect } from 'vitest';
import {
  appleMusicMockAlbumUpcs,
  appleMusicMockAlbumIds,
  appleMusicMockPlaylistId,
  appleMusicMockTrackIds,
} from '../../../utils/mockData/appleMusic/input';
import { testingConductor } from '../index.test';
import { appleMusicPlaylistResponses } from '../../../utils/mockData/appleMusic/responses/playlist';
import { appleMusicSongResponse } from '../../../utils/mockData/appleMusic/responses/song';

describe('Apple Music Playlist Integration', () => {
  it('should get library playlist by id', async () => {
    const response = await testingConductor.appleMusic.playlist.getLibraryById(
      appleMusicMockPlaylistId,
      {
        l: 'en-US',
        include: 'tracks',
        extend: 'attributes',
      },
    );
    expect(response).toEqual(appleMusicPlaylistResponses);
  });
  it('should get current user playlists', async () => {
    const response =
      await testingConductor.appleMusic.playlist.getCurrentUserPlaylists({
        include: 'tracks',
        l: 'en-US',
        limit: 10,
        offset: '0',
        extend: 'attributes',
      });
    expect(response).toEqual(appleMusicPlaylistResponses);
  });
  it('should create a new library playlist', async () => {
    const response = await testingConductor.appleMusic.playlist.create({
      name: 'test playlist',
      description: 'test description',
      localization: 'en-US',
    });
    expect(response).toEqual(appleMusicPlaylistResponses);
  });
  it('should add tracks to library playlist', async () => {
    const response =
      await testingConductor.appleMusic.playlist.addTracksToPlaylist(
        appleMusicMockPlaylistId,
        appleMusicMockTrackIds,
        {
          l: 'en-US',
        },
      );
    expect(response).toEqual(null);
  });

  it('should get tracks from library playlist', async () => {
    const response =
      await testingConductor.appleMusic.playlist.getUserPlaylistTracks(
        appleMusicMockPlaylistId,
      );
    expect(response).toEqual(appleMusicSongResponse);
  });
});
