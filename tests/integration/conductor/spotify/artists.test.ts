import {
  spotifyArtistIdSample,
  spotifyLimitAndOffsetOptionsSample,
} from '../../../utils/mockData/spotify/input';
import {
  spotifyArtistsAlbumsResponse,
  spotifyArtistsRelatedArtistsResponse,
  spotifyArtistsTopTracksResponse,
  spotifyMultipleArtistsResponse,
  spotifySingleArtistResponse,
} from '../../../utils/mockData/spotify/responses/artist';
import { testingConductor } from '../index.test';
import { describe, expect, it } from 'vitest';

describe('Spotify Artist Integration', () => {
  it('should fetch Artist by ID', async () => {
    const response = await testingConductor.spotify.artist.getById(
      spotifyArtistIdSample,
    );
    expect(response).toEqual(spotifySingleArtistResponse);
  });
  it('should fetch several artists by IDs', async () => {
    const response = await testingConductor.spotify.artist.getSeveralById([
      spotifyArtistIdSample,
      spotifyArtistIdSample,
    ]);
    expect(response).toEqual(spotifyMultipleArtistsResponse);
  });

  it('should fetch artist albums', async () => {
    const response = await testingConductor.spotify.artist.getAlbums(
      spotifyArtistIdSample,
      {
        ...spotifyLimitAndOffsetOptionsSample,
        include_groups: ['album', 'appears_on'],
      },
    );
    expect(response).toEqual(spotifyArtistsAlbumsResponse);
  });

  it('shoudl fetch artists top tracks', async () => {
    const response = await testingConductor.spotify.artist.getTopTracks(
      spotifyArtistIdSample,
    );
    expect(response).toEqual(spotifyArtistsTopTracksResponse);
  });

  it('should fetch artists related artists', async () => {
    const response = await testingConductor.spotify.artist.getRelatedArtists(
      spotifyArtistIdSample,
    );
    expect(response).toEqual(spotifyArtistsRelatedArtistsResponse);
  });
});
