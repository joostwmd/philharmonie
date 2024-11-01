import type { TSession } from '../../../types';

export async function refreshSession(
  tokenUrl: string,
  clientId: string,
  clientSecret: string,
  refreshToken: string,
): Promise<TSession> {
  const headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
    Authorization:
      'Basic ' + Buffer.from(`${clientId}:${clientSecret}`).toString('base64'),
  };
  const body = new URLSearchParams({
    grant_type: 'refresh_token',
    refresh_token: refreshToken,
  });

  const response = await fetch(tokenUrl, {
    method: 'POST',
    headers: headers,
    body: body.toString(),
  });

  if (!response.ok) {
    const errorData = await response.json();
    console.error('Error refreshing token:', errorData);
    throw new Error('Error refreshing token: ' + response.statusText);
  }

  const data = await response.json();

  return {
    expiresIn: data.expires_in,
    accessToken: data.access_token,
    refreshToken: data.refresh_token,
  };
}
