import type { StorefrontResponse } from '../../../../../src/conductor/providers/appleMusic/types/response';

export const appleMusicStorefrontResponse: StorefrontResponse = {
  data: [
    {
      id: 'jp',
      type: 'storefronts',
      href: '/v1/storefronts/jp',
      attributes: {
        defaultLanguageTag: 'ja',
        name: 'Japan',
        explicitContentPolicy: 'allowed',
        supportedLanguageTags: ['ja', 'en-US'],
      },
    },
  ],
};
