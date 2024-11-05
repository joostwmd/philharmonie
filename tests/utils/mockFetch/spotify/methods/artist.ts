import {
  spotifySingleArtistResponse,
  spotifyMultipleArtistsResponse,
  spotifyArtistsAlbumsResponse,
  spotifyArtistsTopTracksResponse,
  spotifyArtistsRelatedArtistsResponse,
} from '../../../mockData/spotify/responses/artist';
import { returnMockResponse } from '../../hepler';

export function handleSpotifyArtistMockRequests(
  url: string,
  options?: RequestInit,
) {
  if (url.match(/\/v1\/artists\/[^/]+$/)) {
    // get artist by id
    returnMockResponse(spotifySingleArtistResponse);
  } else if (url.includes('/v1/artists?ids=')) {
    // get multiple artists by ids
    returnMockResponse(spotifyMultipleArtistsResponse);
  } else if (url.match(/\/v1\/artists\/[^/]+\/albums$/)) {
    // get artist's albums
    returnMockResponse(spotifyArtistsAlbumsResponse);
  } else if (url.match(/\/v1\/artists\/[^/]+\/top-tracks$/)) {
    // get artist's top tracks
    returnMockResponse(spotifyArtistsTopTracksResponse);
  } else if (url.match(/\/v1\/artists\/[^/]+\/related-artists$/)) {
    // get related artists
    returnMockResponse(spotifyArtistsRelatedArtistsResponse);
  }
}
