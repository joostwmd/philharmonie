import { describe, expect, it } from 'vitest';
import { testingConductor } from '../index.test';
import {
  appleMusicMockISRCs,
  appleMusicMockSongId,
  appleMusicMockSongIds,
} from '../../../utils/mockData/appleMusic/input';
import { appleMusicSongResponse } from '../../../utils/mockData/appleMusic/responses/song';

describe('Apple Music Song Integration', () => {
  it('should get catalog song by id', async () => {
    const response = await testingConductor.appleMusic.song.getCatalogSongById(
      appleMusicMockSongId,
      {
        l: 'en-US',
        include: ['albums', 'artists'],
        extend: ['attributes'],
      },
    );
    expect(response).toEqual(appleMusicSongResponse);
  });
  it('should get mutiple catalog songs by ISRCS', async () => {
    const response = await testingConductor.appleMusic.song.getMultipleByISRC(
      appleMusicMockISRCs,
      {
        l: 'en-US',
        include: ['albums', 'artists'],
        extend: ['attributes'],
      },
    );
    expect(response).toEqual(appleMusicSongResponse);
  });
  it('should get saved tracks', async () => {
    const response = await testingConductor.appleMusic.song.getSavedTracks({
      l: 'en-US',
      include: ['albums', 'artists'],
      limit: 20,
      offset: 0,
      extend: ['attributes'],
    });
    expect(response).toEqual(appleMusicSongResponse);
  });

  it('should save tracks for user', async () => {
    const response = await testingConductor.appleMusic.song.saveTracksForUser(
      appleMusicMockSongIds,
      {
        l: 'en-US',
      },
    );
    expect(response).toEqual(null);
  });
});
