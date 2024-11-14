import { createConductor } from '../../src';

type TMetadata = {
  artistName: string;
  trackName: string;
  duration: number;
};

//THIS FUNCTION FINDS A TRACK ON APPLE MUSIC BY ISRC AND METADATA. IT IS USEFUL WHEN TRASNFERRING PLAYLISTS BETWEEN SERVICES OR OTHER CROSS-SERVICE OPERATIONS

export async function matchTrackOnAppleMusic(
  isrc: string,
  metadata: TMetadata,
) {
  const conductor = createConductor({
    appleMusic: {
      tokens: {
        developerToken: 'YOUR_DEVELOPER_TOKEN',
      },
      defaultMarket: 'US',
    },
  });
  const searchResultsByISRC = await conductor.appleMusic.song.getMultipleByISRC(
    [isrc],
  );
  const tracksWithSameISRC = searchResultsByISRC.data.filter(
    (track) => track.attributes && track.attributes.isrc === isrc,
  );

  let tracksToConsider = tracksWithSameISRC;

  // If no tracks found with the provided ISRC, search by track name
  if (tracksWithSameISRC.length === 0) {
    const searchResultsByName = await conductor.appleMusic.search.searchCatalog(
      {
        term: metadata.trackName.replace(/\s+/g, ''),
        types: ['songs'],
        limit: 25,
      },
    );

    tracksToConsider = searchResultsByName.results.songs
      ? searchResultsByName.results.songs.data
      : [];
  }

  if (tracksToConsider.length === 0) {
    console.warn('No tracks found with the provided track name nor ISRC.');
    return null;
  }

  // Find the track with the closest duration to the input parameter
  const targetDuration = metadata.duration;
  let closestTrack = tracksToConsider[0];
  let closestDurationDifference = Math.abs(
    closestTrack!.attributes!.durationInMillis - targetDuration,
  );

  for (let track of tracksToConsider) {
    const durationDifference = Math.abs(
      track.attributes!.durationInMillis - targetDuration,
    );
    if (durationDifference < closestDurationDifference) {
      closestTrack = track;
      closestDurationDifference = durationDifference;
    }
  }

  return closestTrack;
}
