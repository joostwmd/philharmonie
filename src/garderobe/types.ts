import type { Garderobe } from './Garderobe';
import type { SpotifyGarderobeProvider } from './providers/spotify';

export type TGarderobeProviders = 'spotify';

export type TGarderobeProviderCredentials = {
  clientId: string;
  clientSecret: string;
};

export type TGarderobeProviderConfig = Partial<
  Record<TGarderobeProviders, TGarderobeProviderCredentials>
>;

export type TProviderInstances<Config extends TGarderobeProviderConfig> = {
  [K in keyof Config]: K extends 'spotify' ? SpotifyGarderobeProvider : never;
};

export type TGarderobe<Config extends TGarderobeProviderConfig> =
  Garderobe<Config> & TProviderInstances<Config>;

export type TSession = {
  accessToken: string;
  refreshToken?: string;
  expiresIn: number;
};
