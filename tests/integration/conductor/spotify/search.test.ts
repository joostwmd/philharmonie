import { spotifySearchItemInputSample } from '../../../utils/mockData/spotify/input';

import { spotifySearchResponse } from '../../../utils/mockData/spotify/responses/search';
import { testingConductor } from '../index.test';
import { describe, expect, it } from 'vitest';

describe('Spotify Search Integration', () => {
  it('should search for spotify items', async () => {
    const response = await testingConductor.spotify.search.forItem(
      spotifySearchItemInputSample,
    );
    expect(response).toEqual(spotifySearchResponse);
  });
});
