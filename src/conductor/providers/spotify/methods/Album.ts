import { makeRequest } from '../../../../utils';
import { SPOTIFY_API_BASE_URL, SPOTIFY_METHODS_PATHS } from '../constants';
import type { ISpotifyAlbum, ISpotifyAlbumTracksResponse } from '../types';

export class Album {
  private apiKey: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  async getById(albumId: string): Promise<ISpotifyAlbum> {
    console.log('spotify.album.getById', albumId);
    const url = `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.albums}${albumId}`;
    return await makeRequest(url, this.apiKey, 'spotify');
  }

  async getSeveralById(albumIds: string[]): Promise<ISpotifyAlbum[]> {
    console.log('spotify.album.getSeveralById', albumIds);
    const url = `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.albums}`;
    return await makeRequest(url, this.apiKey, 'spotify', 'GET', {
      ids: albumIds,
    });
  }

  async getTracks(albumId: string): Promise<ISpotifyAlbumTracksResponse> {
    console.log('spotify.album.getTracks', albumId);
    const url = `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.albums}${albumId}/tracks`;
    return await makeRequest(url, this.apiKey, 'spotify');
  }

  async getUsersSavedAlbums(): Promise<ISpotifyAlbum[]> {
    console.log('spotify.album.getUsersSavedAlbums');
    const url = `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.current_user}${SPOTIFY_METHODS_PATHS.albums}`;
    return await makeRequest(url, this.apiKey, 'spotify');
  }

  async saveAlbumForUser(albumId: string): Promise<void> {
    console.log('spotify.album.saveAlbum', albumId);
    const url = `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.current_user}${SPOTIFY_METHODS_PATHS.albums}${albumId}`;
    await makeRequest(url, this.apiKey, 'spotify', 'PUT', { ids: [albumId] });
  }

  async removeAlbumForUser(albumId: string): Promise<void> {
    console.log('spotify.album.removeAlbum', albumId);
    const url = `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.current_user}${SPOTIFY_METHODS_PATHS.albums}${albumId}`;
    await makeRequest(url, this.apiKey, 'spotify', 'DELETE', {
      ids: [albumId],
    });
  }

  async checkUsersSavedAlbums(albumIds: string[]): Promise<boolean[]> {
    console.log('spotify.album.checkUsersSavedAlbums', albumIds);
    const url = `${SPOTIFY_API_BASE_URL}${SPOTIFY_METHODS_PATHS.current_user}${SPOTIFY_METHODS_PATHS.albums}contains`;
    return await makeRequest(url, this.apiKey, 'spotify', 'GET', {
      ids: albumIds,
    });
  }
}
