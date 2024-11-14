import { createConductor } from '../../dist';
import type { SpotifyApi } from '../../src/conductor/providers/spotify/types/typed';

//SPOTIFY ONLY RETURNS 100 TRACKS PER REQUEST, SO WE NEED TO FETCH ALL TRACKS IN THE PLAYLIST USING PAGINATION
export async function fetchAllSpotifyPlaylistTracks(
  playlistId: string,
): Promise<SpotifyApi.TrackObjectFull[]> {
  const conductor = createConductor({
    spotify: {
      tokens: {
        accessToken: 'YOUR_ACCESS_TOKEN',
      },
      defaultMarket: 'US',
    },
  });

  let allTracks: SpotifyApi.TrackObjectFull[] = [];
  let offset = 0;
  const limit = 100;

  while (true) {
    const response = await conductor.spotify.playlist.getItems(playlistId, {
      offset,
      limit,
    });
    allTracks = allTracks.concat(
      response.items
        .map((item) => item.track)
        .filter((track): track is SpotifyApi.TrackObjectFull => track !== null),
    );
    if (response.items.length < limit) {
      break;
    }
    offset += limit;
  }

  return allTracks;
}
