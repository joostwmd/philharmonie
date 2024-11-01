export type TGarderobeProviders = 'spotify' | 'tidal' | 'amazon';

export type TGarderobeProviderCredentials = {
  clientId: string;
  clientSecret: string;
};

export type TGarderobeProviderConfig = {
  [key in TGarderobeProviders]: TGarderobeProviderCredentials;
};

export type TSession = {
  accessToken: string;
  refreshToken?: string;
  expiresIn: number;
};
