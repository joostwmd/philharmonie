export type TConductorProviders = 'spotify' | 'apple';

export type TAppleMusicTokens = {
  developerToken: string;
  userToken?: string;
};

export type TOAuthToken = {
  accessToken: string;
};

export type TSession<T extends TConductorProviders> = T extends 'apple'
  ? TAppleMusicTokens
  : TOAuthToken;
