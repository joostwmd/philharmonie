import type { Conductor } from './Conductor';
import type { SpotifyConductorProvider } from './providers/spotify';
import type { AppleMusicConductorProvider } from './providers/appleMusic';

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
    ? SpotifyConductorProvider
    : K extends 'appleMusic'
      ? AppleMusicConductorProvider
      : never;
};

export type TConductorInstance<Config extends TConductorProvidersConfig> =
  Conductor<Config> & TConductorProviderInstances<Config>;
