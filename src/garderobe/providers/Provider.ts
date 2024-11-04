import type {
  TGarderobeSession,
  TGarderobeProviderCredentials,
} from '../types';

export abstract class GarderobeProvider {
  protected clientId: string;
  protected clientSecret: string;

  constructor(providerCredentials: TGarderobeProviderCredentials) {
    this.clientId = providerCredentials.clientId;
    this.clientSecret = providerCredentials.clientSecret;
  }

  abstract refreshSession(refreshToken: string): Promise<TGarderobeSession>;

  abstract createSession: {
    withClientCredentials(): Promise<TGarderobeSession>;
  };
}
