import {
  spotifyArtistIdSample,
  spotifyArtistIdsSample,
  spotifyGetCurrentUsersTopArtistsOptionsSample,
  spotifyGetCurrentUsersTopTracksOptionsSample,
  spotifyPlaylistIdSample,
} from '../../../utils/mockData/spotify/input';
import {
  spotifyUserProfileResponse,
  spotifyCurrentUsersProfileResponse,
  spotifyUsersTopArtistsResponse,
  spotifyUsersTopTracksResponse,
  spotifyUserFollowsUsersOrArtistsResponse,
  spotifyUsersFollowPlaylistResponse,
} from '../../../utils/mockData/spotify/responses/user';
import { testingConductor } from '../index.test';
import { describe, expect, it } from 'vitest';

describe('Spotify User Integration', () => {
  it('should fetch user profile by ID', async () => {
    const userId = 'someUserId';
    const response = await testingConductor.spotify.user.getById(userId);
    expect(response).toEqual(spotifyUserProfileResponse);
  });
  it('should fetch current user profile', async () => {
    const response = await testingConductor.spotify.user.getCurrentUser();
    expect(response).toEqual(spotifyCurrentUsersProfileResponse);
  });
  it("should fetch current user's top artists", async () => {
    const response = await testingConductor.spotify.user.getCurrentUserTopItems(
      spotifyGetCurrentUsersTopArtistsOptionsSample,
    );
    expect(response).toEqual(spotifyUsersTopArtistsResponse);
  });
  it("should fetch current user's top tracks", async () => {
    const response = await testingConductor.spotify.user.getCurrentUserTopItems(
      spotifyGetCurrentUsersTopTracksOptionsSample,
    );
    expect(response).toEqual(spotifyUsersTopTracksResponse);
  });
  it('should follow a playlist', async () => {
    const response = await testingConductor.spotify.user.followPlaylist(
      spotifyPlaylistIdSample,
    );
    expect(response).toEqual(null);
  });
  it('should unfollow a playlist', async () => {
    const response = await testingConductor.spotify.user.unfollowPlaylist(
      spotifyPlaylistIdSample,
    );
    expect(response).toEqual(null);
  });
  it('should follow an artist', async () => {
    const response = await testingConductor.spotify.user.followArtistsOrUsers({
      ids: [spotifyArtistIdSample],
      type: 'artist',
    });
    expect(response).toEqual(null);
  });
  it('should unfollow an artist', async () => {
    const response = await testingConductor.spotify.user.unfollowArtistsOrUsers(
      {
        ids: spotifyArtistIdsSample,
        type: 'artist',
      },
    );
    expect(response).toEqual(null);
  });
  it('should check if user follows artists or users', async () => {
    const response =
      await testingConductor.spotify.user.checkIfFollowsArtistsOrUsers({
        type: 'artist',
        ids: [spotifyArtistIdSample],
      });
    expect(response).toEqual(spotifyUserFollowsUsersOrArtistsResponse);
  });
  it('should check if user follows a playlist', async () => {
    const response = await testingConductor.spotify.user.checkIfFollowsPlaylist(
      spotifyPlaylistIdSample,
    );
    expect(response).toEqual(spotifyUsersFollowPlaylistResponse);
  });
});
