import {
  spotifyAlbumIdSample,
  spotifyAlbumIdsSample,
  spotifyLimitAndOffsetOptionsSample,
} from '../../../utils/mockData/spotify/input';
import {
  spotifyAlbumTracksResponse,
  spotifySeveralAlbumsResponse,
  spotifySingleAlbumResponse,
  spotifyUsersSavedAlbumsResponse,
} from '../../../utils/mockData/spotify/responses/albums';
import { spotifyCheckUserSavedAlbumsResponse } from '../../../utils/mockData/spotify/responses/track';
import { testingConductor } from '../index.test';
import { describe, expect, it } from 'vitest';

describe('Spotify Album Integration', () => {
  it('should fetch album by ID', async () => {
    const response =
      await testingConductor.spotify.album.getById(spotifyAlbumIdSample);
    expect(response).toEqual(spotifySingleAlbumResponse);
  });

  it('should fetch several albums by IDs', async () => {
    const response = await testingConductor.spotify.album.getSeveralById([
      spotifyAlbumIdSample,
      spotifyAlbumIdSample,
    ]);
    expect(response).toEqual(spotifySeveralAlbumsResponse);
  });

  it('should fetch album tracks', async () => {
    const response = await testingConductor.spotify.album.getTracks(
      spotifyAlbumIdSample,
      spotifyLimitAndOffsetOptionsSample,
    );
    expect(response).toEqual(spotifyAlbumTracksResponse);
  });

  it("should fetch user's saved albums", async () => {
    const response = await testingConductor.spotify.album.getUsersSavedAlbums(
      spotifyLimitAndOffsetOptionsSample,
    );
    expect(response).toEqual(spotifyUsersSavedAlbumsResponse);
  });

  it('should save albums for user', async () => {
    const response = await testingConductor.spotify.album.saveAlbumsForUser(
      spotifyAlbumIdsSample,
    );
    expect(response).toEqual(null);
  });

  it('should remove album for user', async () => {
    const response = await testingConductor.spotify.album.removeAlbumsForUser(
      spotifyAlbumIdsSample,
    );
    expect(response).toEqual(null);
  });

  it("should check user's saved albums", async () => {
    const result = await testingConductor.spotify.album.checkUsersSavedAlbums([
      spotifyAlbumIdSample,
      spotifyAlbumIdSample,
    ]);
    expect(result).toEqual(spotifyCheckUserSavedAlbumsResponse);
  });
});
