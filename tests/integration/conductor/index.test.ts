import { describe, expect, it, vi } from 'vitest';
import { createConductor } from '../../../src';
import { mockFetch } from '../../utils/mockFetch';

export const testingConductor = createConductor(
  {
    spotify: {
      tokens: {
        accessToken: 'accessToken',
      },
      defaultMarket: 'US',
    },
  },
  vi.fn().mockImplementation(mockFetch),
);

describe('Conductor', () => {
  it('should create a new instance of Conductor', () => {
    expect(testingConductor).toBeDefined();
  });

  it('should have a spotify provider', () => {
    expect(testingConductor.spotify).toBeDefined();
  });
});
