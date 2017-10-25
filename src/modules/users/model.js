import { schema } from 'normalizr';

export const userSchema = new schema.Entity('users');
export const userListSchema = [userSchema];

export const INITIAL_STATE = {
  entities: {},
  results: [],
  fetching: false,
  nextPage: '',
  last: [],
};
