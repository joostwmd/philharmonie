export type TUsherProviders = 'spotify' | 'tidal' | 'amazon';

export type TUsherProviderCredentials = {
  clientId: string;
  clientSecret: string;
};

export type TUsherProviderConfig = {
  [key in TUsherProviders]: TUsherProviderCredentials;
};

export type TSession = {
  accessToken: string;
  refreshToken?: string;
  expiresIn: number;
};
