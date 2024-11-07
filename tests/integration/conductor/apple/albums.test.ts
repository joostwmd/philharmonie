import {
  appleMusicMockAlbumIds,
  appleMusicMockAlbumUpcs,
} from '../../../utils/mockData/appleMusic/input';
import { appleMusicAlbumResponse } from '../../../utils/mockData/appleMusic/responses/album';
import { testingConductor } from '../index.test';
import { describe, expect, it } from 'vitest';

describe('Apple Music Album Integration', () => {
  it('should fetch multiple albums by UPC', async () => {
    const response = await testingConductor.appleMusic.album.getMultipleByUPC(
      appleMusicMockAlbumUpcs,
      {
        l: 'en-US',
        include: 'artists',
        extend: 'attributes',
      },
    );
    expect(response).toEqual(appleMusicAlbumResponse);
  });
  it("should fetch user's saved albums", async () => {
    const response =
      await testingConductor.appleMusic.album.getSavedAlbumsForUser({
        include: 'artists',
        l: 'en-US',
        limit: 20,
        offset: '0',
        extend: 'attributes',
      });
    expect(response).toEqual(appleMusicAlbumResponse);
  });
  it('should save albums for user', async () => {
    const response = await testingConductor.appleMusic.album.saveAlbumsForUser(
      appleMusicMockAlbumIds,
      {
        localization: 'en-US',
      },
    );
    expect(response).toEqual(null);
  });
});
