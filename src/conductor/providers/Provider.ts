import { handleMakeRequest } from '../../utils';
import type {
  TAppleMusicApiTokens,
  TConductorProviderConfig,
  TConductorProviders,
  TOAuthApiTokens,
} from '../types';

export abstract class ConductorProvider {
  private tokens: TOAuthApiTokens | TAppleMusicApiTokens;
  private providerName: string;
  public market: string;
  private fetch: typeof fetch;

  constructor(
    providerName: TConductorProviders,
    providerConfig: TConductorProviderConfig<TConductorProviders>,
    fetchFunction?: typeof fetch,
  ) {
    this.providerName = providerName;
    this.tokens = providerConfig.tokens;
    this.market = providerConfig.defaultMarket;
    this.fetch = fetchFunction || fetch;
  }

  public abstract setUserMarket(): Promise<void>;

  public injectParamsIntoUrl(
    url: string,
    params: Record<string, string | number | undefined>,
  ): string {
    const urlParams = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined) {
        urlParams.append(key, String(value));
      }
    });

    return url.includes('?')
      ? `${url}&${urlParams.toString()}`
      : `${url}?${urlParams.toString()}`;
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
      this.fetch,
    );
  }
}
