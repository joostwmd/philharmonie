import { createConductor } from '../../src';

export function initTestingConductorWithMockFetch(mockFetch: typeof fetch) {
  const conductor = createConductor(
    {
      spotify: {
        tokens: {
          accessToken: 'accessToken',
        },
        defaultMarket: 'US',
      },
      appleMusic: {
        tokens: {
          developerToken: 'developerToken',
          userToken: 'userToken',
        },
        defaultMarket: 'US',
      },
    },
    mockFetch,
  );

  return conductor;
}
