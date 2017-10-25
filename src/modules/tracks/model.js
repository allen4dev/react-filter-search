import { schema } from 'normalizr';

export const trackSchema = new schema.Entity('tracks');
export const trackListSchema = [trackSchema];

export const INITIAL_STATE = {
  entities: {},
  results: [],
  fetching: false,
  nextPage: '',
  last: [],
};
