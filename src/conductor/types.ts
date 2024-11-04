import type { Conductor } from './Conductor';
import type { Spotify } from './providers/spotify';
import type { AppleMusic } from './providers/appleMusic';

export type TConductorProvider = 'spotify' | 'appleMusic';

export type TOAuthApiTokens = {
  accessToken: string;
};

export type TAppleMusicApiTokens = {
  developerToken: string;
  userToken?: string;
};

export type TConductorProviderConfig<T extends TConductorProvider> =
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

export type TConductorInstance<Config extends TConductorProvidersConfig> =
  Conductor<Config> & TConductorProviderInstances<Config>;
