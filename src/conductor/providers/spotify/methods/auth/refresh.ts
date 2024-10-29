import type { Session } from "../../../../types"

export async function refreshTokens(
  tokenUrl: string,
  clientId: string,
  clientSecret: string,
  refreshToken: string
): Promise<Session> {
  console.log("refreshing tokens")
  console.log("token url", tokenUrl)
  console.log("clientId", clientId)
  console.log("clientSecret", clientSecret)
  console.log("refreshToken", refreshToken)

  const headers = {
    "Content-Type": "application/x-www-form-urlencoded",
    Authorization:
      "Basic " + Buffer.from(`${clientId}:${clientSecret}`).toString("base64"),
  }
  const body = new URLSearchParams({
    grant_type: "refresh_token",
    refresh_token: refreshToken,
  })

  const response = await fetch(tokenUrl, {
    method: "POST",
    headers: headers,
    body: body.toString(),
  })

  if (!response.ok) {
    const errorData = await response.json()
    console.error("Error refreshing token:", errorData)
    throw new Error("Error refreshing token: " + response.statusText)
  }

  const data = await response.json()

  console.log("expires in", data.expires_in)
  console.log("expires at", Date.now() + data.expires_in * 1000)
  console.log("DATAAAA", data)
  return {
    expiresAt: Date.now() + data.expires_in * 1000,
    tokens: {
      access: data.access_token,
      refresh: data.refresh_token,
    },
  }
}
