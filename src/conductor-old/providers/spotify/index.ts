import { Provider } from '..';
import { followArtistById } from './methods/user/followArtist';
import { getArtistAlbums } from './methods/artist/getAlbums';
import { addAlbumsForUser } from './methods/albums/addAlbumsForUser';
import { addTracksForUser } from './methods/track/addTracksForUser';
import type { ISpotifyProvider } from './types';
import type { TSession } from '../../types';

export class SpotifyProvider
  extends Provider<'spotify'>
  implements ISpotifyProvider
{
  override setSession(session: TSession<'spotify'>): void {
    this.session = session;
  }

  album = {
    saveAlbumsForUser: async (ids: string[]) => {
      return await addAlbumsForUser(ids, this.getSession().accessToken);
    },
  };

  user = {
    followArtistById: async (id: string) => {
      return await followArtistById(id, this.getSession().accessToken);
    },
  };

  artist = {
    getAlbums: async (id: string) => {
      return await getArtistAlbums(id, this.getSession().accessToken);
    },
  };

  track = {
    saveTracksForUser: async (ids: string[]) => {
      return await addTracksForUser(ids, this.getSession().accessToken);
    },
  };
}
