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

function fetchingReducer(state = INITIAL_STATE.fetching, action = {}) {
  switch (action.type) {
    case actionTypes.FETCH_PLAYLISTS_REQUEST:
      return true;

    case actionTypes.FETCH_PLAYLISTS_SUCCESS:
      return false;

    default:
      return state;
  }
}

function resultsReducer(state = INITIAL_STATE.results, action = {}) {
  if (action.type === actionTypes.FETCH_PLAYLISTS_SUCCESS) {
    return [...state, ...action.response.result];
  }

  return state;
}

function lastReducer(state = INITIAL_STATE.last, action = {}) {
  if (action.type === actionTypes.FETCH_PLAYLISTS_SUCCESS) {
    return action.response.result;
  }

  return state;
}

const reducer = combineReducers({
  entities: entitiesReducer,
  fetching: fetchingReducer,
  results: resultsReducer,
  last: lastReducer,
});

export default reducer;
