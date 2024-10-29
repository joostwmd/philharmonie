import { Provider } from '..';
import { followArtistById } from './methods/user/followArtist';
import { getArtistAlbums } from './methods/artist/getAlbums';
import { addAlbumsForUser } from './methods/albums/addAlbumsForUser';
import { addTracksForUser } from './methods/track/addTracksForUser';
import type { ISpotifyProvider, TSpotifyAlbum } from './types';
import type { TSession } from '../../types';

export class SpotifyProvider
  extends Provider<'spotify'>
  implements ISpotifyProvider
{
  override setSession(session: TSession<'spotify'>): void {
    this.session = session;
  }

  album = {
    saveAlbumsForUser: async (ids: string[]): Promise<void> => {
      if (!this.session) {
        throw new Error('No Session');
      }
      return await addAlbumsForUser(ids, this.session.accessToken);
    },
  };

  user = {
    followArtistById: async (id: string) => {
      if (!this.session) {
        throw new Error('Token or market not set');
      }
      return await followArtistById(id, this.session.accessToken);
    },
  };

  artist = {
    getAlbums: async (id: string): Promise<TSpotifyAlbum[]> => {
      if (!this.session) {
        throw new Error('Token or market not set');
      }
      return await getArtistAlbums(id, this.session.accessToken);
    },
  };

  track = {
    saveTracksForUser: async (ids: string[]): Promise<void> => {
      if (!this.session) {
        throw new Error('Token or market not set');
      }
      return await addTracksForUser(ids, this.session.accessToken);
    },
  };
}
