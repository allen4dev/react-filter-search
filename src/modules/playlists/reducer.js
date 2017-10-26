import { combineReducers } from 'redux';

import * as actionTypes from './actionTypes';
import { INITIAL_STATE } from './model';

function entitiesReducer(state = INITIAL_STATE.entities, action = {}) {
  switch (action.type) {
    case actionTypes.FETCH_PLAYLISTS_SUCCESS:
      return {
        ...state,
        ...action.response.entities.playlists,
      };

    default:
      return state;
  }
}

function lastReducer(state = INITIAL_STATE.last, action = {}) {
  if (action.type === actionTypes.FETCH_PLAYLISTS_SUCCESS) {
    return action.response.result;
  }

  return state;
}

const reducer = combineReducers({
  entities: entitiesReducer,
  last: lastReducer,
});

export default reducer;
