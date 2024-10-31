import type { AppleMusicApiTokens } from './conductor/Conductor';
type HeadersInit = Headers | string[][] | Record<string, string>;

export function constructHeader(
  tokens: string | AppleMusicApiTokens,
  provider: string,
): HeadersInit {
  if (provider === 'apple') {
    const appleTokens = tokens as AppleMusicApiTokens;
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${appleTokens.developerToken}`,
    };

    if (appleTokens.userToken) {
      headers['Music-User-Token'] = appleTokens.userToken;
    }

    return headers;
  } else {
    return {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${tokens as string}`,
    };
  }
}

export async function makeRequest(
  url: string,
  tokens: string | AppleMusicApiTokens,
  provider: string,
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' = 'GET',
  body?: any,
): Promise<any | ProviderError> {
  try {
    console.log(
      `Making ${method} request to ${provider}. The endpoint is ${url}`,
    );

    const headers = constructHeader(tokens, provider);

    console.log('headers', headers);

    const response = await fetch(url, {
      method,
      headers,
      body: body ? JSON.stringify(body) : undefined,
    });

    if (!response.ok) {
      return handleProviderError(response, url, provider);
    }

    return await response.json();
  } catch (error) {
    return handleProviderError(error, url, provider);
  }
}

export interface ProviderError {
  url: string;
  provider: string;
  statusCode: number;
  message: string;
}

export function handleProviderError(
  error: any,
  url: string,
  provider: string,
): ProviderError {
  let statusCode;
  let message;

  if (error.response) {
    statusCode = error.response.status || 500;
    message = error.response.statusText || 'Unknown Error';
  } else if (error.status) {
    statusCode = error.status;
    message = error.statusText || 'Unknown Error';
  }

  return {
    url,
    provider,
    statusCode,
    message,
  };
}
