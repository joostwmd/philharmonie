import type { SpotifyGarderobeProvider } from './providers/spotify';

export type TGarderobeProviders = 'spotify' | 'tidal' | 'amazon';

export type TGarderobeProviderCredentials = {
  clientId: string;
  clientSecret: string;
};

export type TGarderobeProviderConfig = Partial<
  Record<TGarderobeProviders, TGarderobeProviderCredentials>
>;

export type TSession = {
  accessToken: string;
  refreshToken?: string;
  expiresIn: number;
};

export type ProviderInstances<Config extends TGarderobeProviderConfig> = {
  [K in keyof Config]: K extends 'spotify' ? SpotifyGarderobeProvider : unknown;
};
