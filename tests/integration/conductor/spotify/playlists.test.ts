import {
  spotifyAddItemsToPlaylistOptionsSample,
  spotifyChangePlaylistDetailsOptionsSample,
  spotifyCreatePlaylistOptionsSample,
  spotifyFieldsAndAdditionalTypesOptionsSample,
  spotifyLimitAndOffsetOptionsSample,
  spotifyPlaylistIdSample,
  spotifyRemoveItemsFromPlaylistOptionsSample,
  spotifyTrackUrisSample,
  spotifyUpdatePlaylistItemsOptionsSample,
  spotifyUserIdSample,
} from '../../../utils/mockData/spotify/input';
import {
  spotifyCreatePlaylistResponse,
  spotifyGetItemsOfPlaylistResponse,
  spotifyListOfUsersPlaylistsResponse,
  spotifyPlaylistSnapshotResponse,
  spotifySinglePlaylistResponse,
} from '../../../utils/mockData/spotify/responses/playlist';

import { testingConductor } from '../index.test';
import { describe, expect, it } from 'vitest';

describe('Spotify Playlist Integration', () => {
  it('should get playlist by id', async () => {
    const response = await testingConductor.spotify.playlist.getById(
      spotifyPlaylistIdSample,
      spotifyFieldsAndAdditionalTypesOptionsSample,
    );
    expect(response).toBe(spotifySinglePlaylistResponse);
  });
  it('should change playlist details', async () => {
    const response = await testingConductor.spotify.playlist.changeDetails(
      spotifyPlaylistIdSample,
      spotifyChangePlaylistDetailsOptionsSample,
    );
    expect(response).toBe(null);
  });
  it('should get playlist items', async () => {
    const response = await testingConductor.spotify.playlist.getItems(
      spotifyPlaylistIdSample,
      {
        ...spotifyLimitAndOffsetOptionsSample,
        ...spotifyFieldsAndAdditionalTypesOptionsSample,
      },
    );
    expect(response).toBe(spotifyGetItemsOfPlaylistResponse);
  });
  it('should update playlist items', async () => {
    const response =
      await testingConductor.spotify.playlist.updatePlaylistItems(
        spotifyPlaylistIdSample,
        spotifyTrackUrisSample,
        spotifyUpdatePlaylistItemsOptionsSample,
      );
    expect(response).toBe(spotifyPlaylistSnapshotResponse);
  });

  it('should add items to playlist', async () => {
    const response = await testingConductor.spotify.playlist.addItemsToPlaylist(
      spotifyPlaylistIdSample,
      spotifyAddItemsToPlaylistOptionsSample,
    );
    expect(response).toBe(spotifyPlaylistSnapshotResponse);
  });

  it('should remove items from playlist', async () => {
    const response =
      await testingConductor.spotify.playlist.removeItemsFromPlaylist(
        spotifyPlaylistIdSample,
        spotifyRemoveItemsFromPlaylistOptionsSample,
      );
    expect(response).toBe(spotifyPlaylistSnapshotResponse);
  });

  it('should get current user playlists', async () => {
    const response = await testingConductor.spotify.playlist.getUserPlaylists(
      spotifyUserIdSample,
      spotifyLimitAndOffsetOptionsSample,
    );
    expect(response).toBe(spotifyListOfUsersPlaylistsResponse);
  });

  it('should create playlist', async () => {
    const response = await testingConductor.spotify.playlist.create(
      spotifyUserIdSample,
      spotifyCreatePlaylistOptionsSample,
    );
    expect(response).toBe(spotifyCreatePlaylistResponse);
  });

  it('should add cover to playlist', async () => {
    const response = await testingConductor.spotify.playlist.addCoverImage(
      spotifyPlaylistIdSample,
      'image data',
    );
    expect(response).toBe(null);
  });
});
