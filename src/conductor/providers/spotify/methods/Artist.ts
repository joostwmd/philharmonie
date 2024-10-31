import { makeRequest } from '../../../../utils';
import { SPOTIFY_API_BASE_URL, SPOTIFY_METHODS_PATHS } from '../constants';
import type { ISpotifyAlbum, ISpotifyArtist } from '../types';
import type { TGetByIdInput } from '../types/input';

export class Artist {
  private apiKey: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  async getById(artistId: TGetByIdInput): Promise<ISpotifyArtist> {
    const url = `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.artists}${artistId}`;
    return await makeRequest(url, this.apiKey, 'spotify');
  }

  async getSeveralById(artistIds: TGetByIdInput[]): Promise<ISpotifyArtist[]> {
    const url = `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.albums}?ids=${encodeURIComponent(artistIds.join(','))}`;
    return await makeRequest(url, this.apiKey, 'spotify');
  }

  async getAlbums(artistId: TGetByIdInput): Promise<ISpotifyAlbum[]> {
    const url = `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.artists}${artistId}/albums`;
    return await makeRequest(url, this.apiKey, 'spotify');
  }

  async getTopTracks(artistId: TGetByIdInput): Promise<ISpotifyAlbum> {
    const url = `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.artists}${artistId}/top-tracks`;
    return makeRequest(url, this.apiKey, 'spotify');
  }

  async getRelatedArtists(artistId: TGetByIdInput): Promise<ISpotifyArtist[]> {
    const url = `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.artists}${artistId}/related-artists`;
    return makeRequest(url, this.apiKey, 'spotify');
  }
}
