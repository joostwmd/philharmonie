import { handleMakeRequest } from '../../utils';
import type {
  TAppleMusicApiTokens,
  TConductorProviderConfig,
  TConductorProviders,
  TOAuthApiTokens,
} from '../types';

export abstract class ConductorProvider {
  protected tokens: TOAuthApiTokens | TAppleMusicApiTokens;
  protected providerName: string;
  public market: string;

  constructor(
    providerName: TConductorProviders,
    providerConfig: TConductorProviderConfig<TConductorProviders>,
  ) {
    this.providerName = providerName;
    this.tokens = providerConfig.tokens;
    this.market = providerConfig.defaultMarket;
  }

  public abstract setUserMarket(): Promise<void>;

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
