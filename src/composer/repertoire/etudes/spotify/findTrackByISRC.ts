import type { Conductor } from '../../../../conductor/Conductor';

export async function findTrackByISRC(
  conductor: Conductor,
  isrc: string,
): Promise<any> {
  const track = await conductor.spotify.search.forItem({
    query: `isrc:${isrc}`,
    type: ['track'],
  });

  return track;
}
