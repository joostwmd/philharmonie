export type TUsherProviders = 'spotify' | 'tidal' | 'amazon';

export type TUsherProviderConfig = {
  name: TUsherProviders;
  clientId: string;
  clientSecret: string;
};

export type TSession = {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
};

export interface IUsher {
  refreshSession(
    providerName: TUsherProviders,
    refreshToken: string,
  ): Promise<void>;
}
