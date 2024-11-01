import type { TSession, TUsherProviderCredentials } from '../types';

export abstract class UsherProvider {
  protected clientId: string;
  protected clientSecret: string;

  constructor(providersConfig: TUsherProviderCredentials) {
    this.clientId = providersConfig.clientId;
    this.clientSecret = providersConfig.clientSecret;
  }

  abstract refreshSession(refreshToken: string): Promise<TSession>;

  abstract createSession: {
    withClientCredentials(): Promise<TSession>;
  };
}
