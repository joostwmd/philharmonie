import {
  spotifyTrackIdSample,
  spotifyTrackIdsSample,
  spotifyLimitAndOffsetOptionsSample,
  spotifyGetRecommendationsInputSample,
} from '../../../utils/mockData/spotify/input';
import {
  spotifySingleTrackResponse,
  spotifyMultipleTracksResponse,
  spotifyUsersSavedTracksResponse,
  spotifyCheckUserSavedAlbumsResponse,
  spotifyAudioFeaturesResponse,
  spotifyMultipleAudioFeaturesResponse,
  spotifyRecommendationsResponse,
} from '../../../utils/mockData/spotify/responses/track';
import { testingConductor } from '../index.test';
import { describe, expect, it } from 'vitest';

describe('Spotify Track Integration', () => {
  it('should fetch track by ID', async () => {
    const response =
      await testingConductor.spotify.track.getById(spotifyTrackIdSample);
    expect(response).toEqual(spotifySingleTrackResponse);
  });
  it('should fetch several tracks by IDs', async () => {
    const response = await testingConductor.spotify.track.getSeveralById([
      spotifyTrackIdSample,
      spotifyTrackIdSample,
    ]);
    expect(response).toEqual(spotifyMultipleTracksResponse);
  });
  it("should fetch user's saved tracks", async () => {
    const response = await testingConductor.spotify.track.getUsersSavedTracks(
      spotifyLimitAndOffsetOptionsSample,
    );
    expect(response).toEqual(spotifyUsersSavedTracksResponse);
  });
  it('should save tracks for user', async () => {
    const response =
      await testingConductor.spotify.track.saveTracksFoCurrentUser(
        spotifyTrackIdsSample,
      );
    expect(response).toEqual(null);
  });
  it('should remove tracks for user', async () => {
    const response =
      await testingConductor.spotify.track.removeTracksForCurrentsUser(
        spotifyTrackIdsSample,
      );
    expect(response).toEqual(null);
  });
  it("should check user's saved tracks", async () => {
    const result = await testingConductor.spotify.track.checkUsersSavedTracks([
      spotifyTrackIdSample,
      spotifyTrackIdSample,
    ]);
    expect(result).toEqual(spotifyCheckUserSavedAlbumsResponse);
  });
  it('should fetch audio features by track ID', async () => {
    const response =
      await testingConductor.spotify.track.getAudioFeaturesById(
        spotifyTrackIdSample,
      );
    expect(response).toEqual(spotifyAudioFeaturesResponse);
  });
  it('should fetch several audio features by track IDs', async () => {
    const response =
      await testingConductor.spotify.track.getSeveralAudioFeaturesById([
        spotifyTrackIdSample,
        spotifyTrackIdSample,
      ]);
    expect(response).toEqual(spotifyMultipleAudioFeaturesResponse);
  });
  it('should fetch recommendations', async () => {
    const response = await testingConductor.spotify.track.getRecommendations(
      spotifyGetRecommendationsInputSample,
    );
    expect(response).toEqual(spotifyRecommendationsResponse);
  });
});
