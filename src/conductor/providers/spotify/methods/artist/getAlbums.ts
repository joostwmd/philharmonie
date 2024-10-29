export async function getArtistAlbums(
  artistId: string,
  token: string
): Promise<any> {
  const url = new URL(`https://api.spotify.com/v1/artists/${artistId}/albums`)

  const response = await fetch(url.toString(), {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  })

  if (!response.ok) {
    throw new Error(`Failed to fetch artist albums: ${response.statusText}`)
  }

  const data = await response.json()
  return data
}
