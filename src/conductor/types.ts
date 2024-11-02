export type AppleMusicApiTokens = {
  developerToken: string;
  userToken?: string;
};

export interface APITokens {
  spotify?: string;
  appleMusic?: AppleMusicApiTokens;
}
