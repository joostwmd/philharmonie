// package/tests/integration/conductor/spotify/spotifyAlbum.test.ts
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
    const album = await testingConductor.spotify.album.getById('1');
    console.log('returned album:', album);
    expect(album).toEqual(spotifySingleAlbumResponse);
  });

  // it('should fetch several albums by IDs', async () => {
  //   const albums = await testingConductor.spotify.album.getSeveralById([
  //     '1',
  //     '2',
  //   ]);
  //   expect(albums.albums).toEqual(spotifySeveralAlbumsResponse);
  // });

  // it('should fetch album tracks', async () => {
  //   const tracks = await testingConductor.spotify.album.getTracks('1');
  //   expect(tracks.items).toEqual(spotifyAlbumTracksResponse);
  // });

  // it("should fetch user's saved albums", async () => {
  //   const savedAlbums =
  //     await testingConductor.spotify.album.getUsersSavedAlbums();
  //   expect(savedAlbums).toEqual(spotifyUsersSavedAlbumsResponse);
  // });

  // it('should save albums for user', async () => {
  //   await testingConductor.spotify.album.saveAlbumsForUser(['1']);
  //   // No assertion needed as we are just testing the request
  // });

  // it('should remove album for user', async () => {
  //   await testingConductor.spotify.album.removeAlbumForUser('1');
  //   // No assertion needed as we are just testing the request
  // });

  // it("should check user's saved albums", async () => {
  //   const result = await testingConductor.spotify.album.checkUsersSavedAlbums([
  //     '1',
  //     '2',
  //   ]);
  //   expect(result).toEqual(spotifyCheckUserSavedAlbumsResponse);
  // });
});
