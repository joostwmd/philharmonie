import { handleMakeRequest } from '../../utils';
import type { AppleMusicApiTokens } from '../Conductor';

export abstract class Provider {
  protected tokens: string | AppleMusicApiTokens;
  protected providerName: string;

  constructor(tokens: string | AppleMusicApiTokens, providerName: string) {
    this.tokens = tokens;
    this.providerName = providerName;
  }

  public async makeRequest(
    url: string,
    method: 'GET' | 'POST' | 'PUT' | 'DELETE' = 'GET',
    body?: any,
  ): Promise<any> {
    return await handleMakeRequest(
      url,
      this.tokens,
      this.providerName,
      method,
      body,
    );
  }
}
