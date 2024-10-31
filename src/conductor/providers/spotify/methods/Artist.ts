import { makeRequest } from '../../../../utils';
import { SPOTIFY_API_BASE_URL, SPOTIFY_METHODS_PATHS } from '../constants';
import type { ISpotifyAlbum, ISpotifyArtist } from '../types';

export class Artist {
  private apiKey: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  async getById(artistId: string): Promise<ISpotifyArtist> {
    const url = `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.artists}${artistId}`;
    return await makeRequest(url, this.apiKey, 'spotify');
  }

  async getSeveralById(artistIds: string[]): Promise<ISpotifyArtist[]> {
    const url = `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.albums}?ids=${encodeURIComponent(artistIds.join(','))}`;
    return await makeRequest(url, this.apiKey, 'spotify');
  }

  async getAlbums(artistId: string): Promise<ISpotifyAlbum[]> {
    const url = `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.artists}${artistId}/albums`;
    return await makeRequest(url, this.apiKey, 'spotify');
  }

  async getTopTracks(artistId: string): Promise<ISpotifyAlbum> {
    const url = `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.artists}${artistId}/top-tracks`;
    return makeRequest(url, this.apiKey, 'spotify');
  }

  async getRelatedArtists(artistId: string): Promise<ISpotifyArtist[]> {
    const url = `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.artists}${artistId}/related-artists`;
    return makeRequest(url, this.apiKey, 'spotify');
  }
}
