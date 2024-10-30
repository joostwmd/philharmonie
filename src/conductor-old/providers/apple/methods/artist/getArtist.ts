export async function getArtist(
  artistId: string,
  storefront: string,
  token: string,
  localization?: string,
): Promise<any> {
  const url = new URL(
    `https://api.music.apple.com/v1/catalog/${storefront}/artists/${artistId}`,
  );

  if (localization) {
    url.searchParams.append('l', localization);
  }

  const response = await fetch(url.toString(), {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();
  return data;
}
