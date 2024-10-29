export type TConductorProviders = 'spotify' | 'tidal' | 'amazon' | 'apple';

export type TAppleMusicSession = {
  developerToken: string;
  userToken?: string;
};

export type TOAuthSession = {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
};

export type TSession<T extends TConductorProviders> = T extends 'apple'
  ? TAppleMusicSession
  : TOAuthSession;
