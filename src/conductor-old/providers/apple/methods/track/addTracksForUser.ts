export async function addTracksForUser(
  ids: string[],
  token: string,
  localization?: string,
): Promise<void> {
  if (ids.length > 50) {
    throw new Error('A maximum of 50 items can be specified in one request.');
  }

  const url = new URL('https://api.music.apple.com/v1/me/library');
  url.searchParams.append('ids', ids.join(','));
  if (localization) {
    url.searchParams.append('l', localization);
  }

  const response = await fetch(url.toString(), {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });

  console.log('apple', response);

  if (response.status === 202) {
    // Accepted, no response body
    return;
  } else if (response.status === 401) {
    throw new Error('Unauthorized: Incorrect Authorization header.');
  } else if (response.status === 403) {
    throw new Error('Forbidden: Invalid or insufficient authentication.');
  } else if (response.status === 500) {
    throw new Error('Internal Server Error: An error occurred on the server.');
  } else if (!response.ok) {
    throw new Error(`Failed to add tracks: ${response.statusText}`);
  }
}
