import type { TAppleMusicApiTokens, TOAuthApiTokens } from './conductor/types';
type HeadersInit = Headers | string[][] | Record<string, string>;

export function constructHeader(
  tokens: TOAuthApiTokens | TAppleMusicApiTokens,
  provider: string,
): HeadersInit {
  if (provider === 'appleMusic') {
    const appleTokens = tokens as TAppleMusicApiTokens;
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${appleTokens.developerToken}`,
    };

    if (appleTokens.userToken) {
      headers['Music-User-Token'] = appleTokens.userToken;
    }

    return headers;
  } else {
    const oAuthTokens = tokens as TOAuthApiTokens;
    return {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${oAuthTokens.accessToken}`,
    };
  }
}

export async function handleMakeRequest(
  url: string,
  tokens: TOAuthApiTokens | TAppleMusicApiTokens,
  provider: string,
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' = 'GET',
  body?: any,
  fetchFunction: typeof fetch = fetch,
): Promise<any | OperaError> {
  try {
    const headers = constructHeader(tokens, provider);

    const response = await fetchFunction(url, {
      method,
      // @ts-ignore
      headers,
      body: body ? JSON.stringify(body) : undefined,
    });

    if (!response.ok) {
      throw handleProviderError(response, url, provider);
    }

    return await response.json();
  } catch (error) {
    if (error instanceof OperaError) {
      throw error;
    }
    throw handleProviderError(error, url, provider);
  }
}

export class OperaError extends Error {
  constructor(
    public readonly failed: boolean,
    public readonly url: string,
    public readonly provider: string,
    public readonly statusCode: number,
    public readonly providerMessage: string,
  ) {
    super();
  }
}

export function handleProviderError(
  error: any,
  url: string,
  provider: string,
): OperaError {
  let statusCode;
  let message;

  if (error.response) {
    statusCode = error.response.status || 500;
    message = error.response.statusText || 'Unknown Error';
  } else if (error.status) {
    statusCode = error.status;
    message = error.statusText || 'Unknown Error';
  } else {
    statusCode = 500;
    message = error.message || 'Unknown Error';
  }

  const operaError = new OperaError(true, url, provider, statusCode, message);
  //console.error(operaError);
  return operaError;
}
