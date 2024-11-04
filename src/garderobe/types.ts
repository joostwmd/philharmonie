import type { Garderobe } from './Garderobe';
import type { SpotifyGarderobeProvider } from './providers/spotify';

export type TGarderobeProvider = 'spotify';

export type TGarderobeProviderCredentials = {
  clientId: string;
  clientSecret: string;
};

export type TGarderobeProviderConfig = Partial<
  Record<TGarderobeProvider, TGarderobeProviderCredentials>
>;

export type TGarderobeProviderInstances<
  Config extends TGarderobeProviderConfig,
> = {
  [K in keyof Config]: K extends 'spotify' ? SpotifyGarderobeProvider : never;
};

export type TGarderobeInstance<Config extends TGarderobeProviderConfig> =
  Garderobe<Config> & TGarderobeProviderInstances<Config>;

export type TGarderobeSession = {
  accessToken: string;
  refreshToken?: string;
  expiresIn: number;
};
