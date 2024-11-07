import { describe, expect, it } from 'vitest';
import { testingConductor } from '../index.test';
import { appleMusicSearchCatalogResponse } from '../../../utils/mockData/appleMusic/responses/search';

describe('Apple Music Search Integration', () => {
  it('should search catalog', async () => {
    const response = await testingConductor.appleMusic.search.searchCatalog({
      term: 'taylor swift',
      types: ['albums', 'playlists'],
      limit: 5,
      l: 'en-US',
      offset: 0,
    });
    expect(response).toEqual(appleMusicSearchCatalogResponse);
  });
});
