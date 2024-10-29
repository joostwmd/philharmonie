import { TUsherProviderConfig } from '../types';
import { IUsherProvider } from './types';

export abstract class UsherProvider implements IUsherProvider {
  protected clientId: string;
  protected clientSecret: string;

  initWithCredentials(config: TUsherProviderConfig): void {
    this.clientId = config.clientId;
    this.clientSecret = config.clientSecret;
  }

  abstract refreshSession(refreshToken: string): Promise<void>;
}
