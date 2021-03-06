import { combineReducers } from 'redux';
import { handleAction } from 'redux-actions';

import * as actionTypes from './actionTypes';
import { INITIAL_STATE } from './model';

const entitiesReducer = handleAction(
  actionTypes.FETCH_PLAYLISTS_SUCCESS,
  (state, { payload: { entities } }) => ({ ...state, ...entities.playlists }),
  INITIAL_STATE.entities
);

const reducer = combineReducers({
  entities: entitiesReducer,
});

export default reducer;
