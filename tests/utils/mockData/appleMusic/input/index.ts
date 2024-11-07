import type {
  TGetCatalogSongByIdOptions,
  TGetMultipleByISRCOptions,
  TGetSavedTracksOptions,
  TGetSeveralCatalogSongsByIdsOptions,
} from '../../../../../src/conductor/providers/appleMusic/methods/Song';
import type { TGetStorefrontOptions } from '../../../../../src/conductor/providers/appleMusic/methods/User';

export const appleMusicMockAlbumId = '1440857781';
export const appleMusicMockAlbumIds = ['1440857781', '1440857782'];
export const appleMusicMockAlbumUpc = '00602445868162';
export const appleMusicMockAlbumUpcs = ['00602445868162', '00602445868163'];
export const appleMusicMockArtistId = '178834';
export const appleMusicMockArtistIds = ['178834', '178835'];
export const appleMusicMockTrackId = '1440857781';
export const appleMusicMockTrackIds = ['1440857781', '1440857782'];
export const appleMusicMockISRC = 'USUM71805167';
export const appleMusicMockISRCs = ['USUM71805167', 'USUM71805168'];
export const appleMusicMockSongId = '1440857781';
export const appleMusicMockSongIds = ['1440857781', '1440857782'];
export const appleMusicMockPlaylistId = 'pl.123456789';
export const appleMusicMockPlaylistIds = ['pl.123456789', 'pl.123456790'];

// Mock data for TGetCatalogSongByIdOptions
export const mockGetCatalogSongByIdOptions: TGetCatalogSongByIdOptions = {
  l: 'en-US',
  include: ['artists', 'albums'],
  extend: ['attributes'],
};

// Mock data for TGetSeveralCatalogSongsByIdsOptions
export const mockGetSeveralCatalogSongsByIdsOptions: TGetSeveralCatalogSongsByIdsOptions =
  {
    l: 'en-US',
    include: ['artists', 'albums'],
    extend: ['attributes'],
  };

// Mock data for TGetMultipleByISRCOptions
export const mockGetMultipleByISRCOptions: TGetMultipleByISRCOptions = {
  l: 'en-US',
  include: ['artists', 'albums'],
  extend: ['attributes'],
};

// Mock data for TGetSavedTracksOptions
export const mockGetSavedTracksOptions: TGetSavedTracksOptions = {
  include: ['artists', 'albums'],
  l: 'en-US',
  limit: 20,
  offset: 0,
  extend: ['attributes'],
};

// Mock data for TGetStorefrontOptions
export const mockGetStorefrontOptions: TGetStorefrontOptions = {
  l: 'en-US',
  limit: 1,
  include: ['artists', 'albums'],
  offset: '0',
  extend: ['attributes'],
};
