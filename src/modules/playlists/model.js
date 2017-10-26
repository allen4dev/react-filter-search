import { schema } from 'normalizr';

export const playlistSchema = new schema.Entity('playlists');
export const playlistListSchema = [playlistSchema];

export const INITIAL_STATE = {
  entities: {},
  last: [],
};
