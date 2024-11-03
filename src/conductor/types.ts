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

export type TConductorConfig = {
  [key in TConductorProviders]: TConductorProviderConfig<key>;
};
