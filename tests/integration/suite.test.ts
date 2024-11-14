import { describe, expect, it, vi } from 'vitest';
import { initTestingConductorWithMockFetch } from '../utils';

describe('Suite test', () => {
  it('should create a new instance of Conductor', async () => {
    const conductor = initTestingConductorWithMockFetch(
      vi.fn().mockImplementation(mockFetchSpotifyAlbumGetById),
    );
    const album = await conductor.spotify.album.getById('albumId');
    expect(conductor).toBeDefined();
  });
});

async function mockFetchSpotifyAlbumGetById(
  url: string,
  options?: RequestInit,
) {}
