import type { Conductor } from '../conductor/Conductor';
import {
  handleTransferPlaylistFromSpotifyToAppleMusic,
  handleTransferUsersPlaylistsFromSpotifyToAppleMusic,
} from './repertoire/concertos/transferPlaylistsFromSpotifyToAppleMusic';
import { handleRemoveDuplicatesFromSpotifyPlaylist } from './repertoire/etudes/spotify/removeDuplicatesFromPlaylist';

export class Composer {
  private conductor: Conductor;

  constructor(conductor: Conductor) {
    this.conductor = conductor;
  }

  public async removeDuplicatesFromSpotifyPlaylist(
    playlistId: string,
  ): Promise<void> {
    await handleRemoveDuplicatesFromSpotifyPlaylist(this.conductor, playlistId);
  }

  public async transferSpotifyPlaylistToAppleMusic(playlistId: string) {
    await handleTransferPlaylistFromSpotifyToAppleMusic(
      this.conductor,
      playlistId,
    );
  }

  public async transferUsersSpotifyPlaylistToAppleMusic() {
    await handleTransferUsersPlaylistsFromSpotifyToAppleMusic(this.conductor);
  }
}
