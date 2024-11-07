import { describe, expect, it } from 'vitest';
import { testingConductor } from '../index.test';
import { appleMusicSearchCatalogResponse } from '../../../utils/mockData/appleMusic/responses/search';
import { appleMusicStorefrontResponse } from '../../../utils/mockData/appleMusic/responses/user';

describe('Apple Music User Integration', () => {
  it('should retrun users storefront', async () => {
    const response = await testingConductor.appleMusic.user.getStorefront({
      l: 'en-US',
      limit: 10,
      include: ['albums', 'artists'],
      offset: '0',
      extend: ['attributes'],
    });
    expect(response).toEqual(appleMusicStorefrontResponse);
  });
});
