import type { TSession, TUsherProviderConfig } from '../types';
import type { IUsherProvider } from './types';

export abstract class UsherProvider implements IUsherProvider {
  protected clientId!: string;
  protected clientSecret!: string;

  initWithCredentials(config: TUsherProviderConfig): void {
    this.clientId = config.clientId;
    this.clientSecret = config.clientSecret;
  }

  abstract refreshSession(refreshToken: string): Promise<TSession>;

  abstract createSession: {
    withClientCredentials(): Promise<TSession>;
  };
}
