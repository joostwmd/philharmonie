export async function addAlbumsForUser(
  ids: string[],
  token: string,
): Promise<void> {
  if (ids.length > 20) {
    throw new Error('A maximum of 20 items can be specified in one request.');
  }

  const url = 'https://api.spotify.com/v1/me/albums';

  const response = await fetch(url, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ids }),
  });

  if (!response.ok) {
    throw new Error(`Failed to save albums: ${response.statusText}`);
  }
}
