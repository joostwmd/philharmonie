import type {
  TGetCatalogSongByIdOptions,
  TGetMultipleByISRCOptions,
  TGetSavedTracksOptions,
  TGetSeveralCatalogSongsByIdsOptions,
} from '../../../../../src/conductor/providers/appleMusic/methods/Song';
import type { TGetStorefrontOptions } from '../../../../../src/conductor/providers/appleMusic/methods/User';

// Mock data for TGetCatalogSongByIdOptions
export const mockGetCatalogSongByIdOptions: TGetCatalogSongByIdOptions = {
  localization: 'en-US',
  include: ['artists', 'albums'],
  extend: ['attributes'],
};

// Mock data for TGetSeveralCatalogSongsByIdsOptions
export const mockGetSeveralCatalogSongsByIdsOptions: TGetSeveralCatalogSongsByIdsOptions =
  {
    localization: 'en-US',
    include: ['artists', 'albums'],
    extend: ['attributes'],
  };

// Mock data for TGetMultipleByISRCOptions
export const mockGetMultipleByISRCOptions: TGetMultipleByISRCOptions = {
  localization: 'en-US',
  include: ['artists', 'albums'],
  extend: ['attributes'],
};

// Mock data for TGetSavedTracksOptions
export const mockGetSavedTracksOptions: TGetSavedTracksOptions = {
  include: ['artists', 'albums'],
  localization: 'en-US',
  limit: 20,
  offset: '0',
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
