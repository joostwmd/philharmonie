import { TUsherProviderConfig } from '../types';

export interface IUsherProvider {
  initWithCredentials(config: TUsherProviderConfig): void;
  refreshSession(refreshToken: string): Promise<void>;
}
