import type { TSession, TUsherProviderCredentials } from '../types';

export abstract class UsherProvider {
  protected clientId: string;
  protected clientSecret: string;

  constructor(providerCredentials: TUsherProviderCredentials) {
    this.clientId = providerCredentials.clientId;
    this.clientSecret = providerCredentials.clientSecret;
  }

  abstract refreshSession(refreshToken: string): Promise<TSession>;

  abstract createSession: {
    withClientCredentials(): Promise<TSession>;
  };
}
