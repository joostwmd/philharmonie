import type {
  TGarderobeSession,
  TGarderobeProviderCredentials,
} from '../types';

export abstract class GarderobeProvider {
  protected clientId: string;
  protected clientSecret: string;
  private fetch: typeof fetch;

  constructor(
    providerCredentials: TGarderobeProviderCredentials,
    fetchFunction: typeof fetch,
  ) {
    this.clientId = providerCredentials.clientId;
    this.clientSecret = providerCredentials.clientSecret;
    this.fetch = fetchFunction;
  }

  abstract refreshSession(refreshToken: string): Promise<TGarderobeSession>;

  abstract createSession: {
    withClientCredentials(): Promise<TGarderobeSession>;
  };
}
