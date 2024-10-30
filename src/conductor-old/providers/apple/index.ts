import { Provider } from '..';
import { getArtist } from './methods/artist/getArtist';
import { addTracksForUser } from './methods/track/addTracksForUser';
import type { IAppleProvider } from './types';
import type { TSession } from '../../types';

export class SpotifyProvider
  extends Provider<'apple'>
  implements IAppleProvider
{
  override setSession(session: TSession<'apple'>): void {
    this.session = session;
  }

  album = {
    saveAlbumsForUser: async (ids: string[]) => {
      return;
      //return await addAlbumsForUser(ids, this.getSession().accessToken);
    },
  };

  user = {
    followArtistById: async (id: string) => {
      return;
      //return await followArtistById(id, this.getSession().accessToken);
    },
  };

  artist = {
    getAlbums: async (id: string) => {
      const artist = await getArtist(
        id,
        'en-US',
        this.getSession().developerToken,
      );
      return artist.relationships.albums;
    },
  };

  track = {
    saveTracksForUser: async (ids: string[]) => {
      return await addTracksForUser(ids, this.getSession().accessToken);
    },
  };
}
