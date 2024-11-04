import type { TGarderobeSession } from '../../../types';

export async function createSessionWithClientCredentials(
  tokenUrl: string,
  clientId: string,
  clientSecret: string,
): Promise<TGarderobeSession> {
  const headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
    Authorization:
      'Basic ' + Buffer.from(`${clientId}:${clientSecret}`).toString('base64'),
  };
  const body = new URLSearchParams({
    grant_type: 'client_credentials',
  });

  const response = await fetch(tokenUrl, {
    method: 'POST',
    headers: headers,
    body: body.toString(),
  });

  if (!response.ok) {
    const errorData = await response.json();
    console.error('Error requesting client credentials token:', errorData);
    throw new Error(
      'Error requesting client credentials token: ' + response.statusText,
    );
  }

  const data = await response.json();

  return {
    expiresIn: data.expires_in,
    accessToken: data.access_token,
  };
}
