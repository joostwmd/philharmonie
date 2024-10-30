import type { TSession, TUsherProviderConfig } from '../types';

export interface IUsherProvider {
  initWithCredentials(config: TUsherProviderConfig): void;
  refreshSession(refreshToken: string): Promise<TSession>;

  createSession: {
    withClientCredentials(): Promise<TSession>;
  };
}
