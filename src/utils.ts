import type { AppleMusicApiTokens } from './conductor/Conductor';

export async function makeGetRequest(
  url: string,
  tokens: string | AppleMusicApiTokens,
  provider: string,
): Promise<any | ProviderError> {
  try {
    console.log(`Making GET request to ${provider}...`);
    return 'Success';
  } catch (error) {
    return handleProviderError(error, provider);
  }
}

export interface ProviderError {
  provider: string;
  statusCode: number;
  message: string;
}

export function handleProviderError(
  error: any,
  provider: string,
): ProviderError {
  const statusCode = error.response?.status || 500; // Default to 500 if no status code is present
  const message = error.response?.statusText || 'Unknown Error';

  return {
    provider,
    statusCode,
    message,
  };
}
