import type { Conductor } from './Conductor';
import type { AppleMusic } from './providers/appleMusic';
import type { Spotify } from './providers/spotify';

export type TConductorProviders = 'spotify' | 'appleMusic';

export type TOAuthApiTokens = {
  accessToken: string;
};

export type TAppleMusicApiTokens = {
  developerToken: string;
  userToken?: string;
};

export type TConductorProviderConfig<T extends TConductorProviders> =
  T extends 'appleMusic'
    ? {
        tokens: TAppleMusicApiTokens;
        defaultMarket: string;
      }
    : {
        tokens: TOAuthApiTokens;
        defaultMarket: string;
      };

export type TConductorProvidersConfig = Partial<{
  spotify: TConductorProviderConfig<'spotify'>;
  appleMusic: TConductorProviderConfig<'appleMusic'>;
}>;

export type TConductorProviderInstances<
  Config extends TConductorProvidersConfig,
> = {
  [K in keyof Config]: K extends 'spotify'
    ? Spotify
    : K extends 'appleMusic'
      ? AppleMusic
      : never;
};

export type TConductor<Config extends TConductorProvidersConfig> =
  Conductor<Config> & TConductorProviderInstances<Config>;
