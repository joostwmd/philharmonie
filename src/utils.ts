import { Conductor } from './conductor';
import { Usher } from './usher';

const conductor = new Conductor(['spotify']);

const test = conductor.artist.getAlbums('123');

const usher = new Usher([
  {
    name: 'spotify',
    clientId: '123',
    clientSecret: '123',
  },
]);
