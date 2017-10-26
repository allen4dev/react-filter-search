import { combineReducers } from 'redux';

import * as actionTypes from './actionTypes';
import { INITIAL_STATE } from './model';

function queryReducer(state = INITIAL_STATE.query, action = {}) {
  if (action.type === actionTypes.SET_QUERY) {
    return action.payload;
  }

  return state;
}

function resultsReducer(filter) {
  return (state = INITIAL_STATE[filter].results, action = {}) => {
    if (!action.payload || filter !== action.payload.filter) {
      return state;
    }

    if (action.type === actionTypes.FETCH_RESOURCE_SUCCESS) {
      return [...state, ...action.payload.result];
    }

    return state;
  };
}

function fetchingReducer(filter) {
  return (state = INITIAL_STATE[filter].fetching, action = {}) => {
    if (!action.payload || filter !== action.payload.filter) {
      return state;
    }

    switch (action.type) {
      case actionTypes.FETCH_RESOURCE_REQUEST:
        return true;

      case actionTypes.FETCH_RESOURCE_SUCCESS:
        return false;

      default:
        return state;
    }
  };
}

function createReducer(filter) {
  return combineReducers({
    results: resultsReducer(filter),
    fetching: fetchingReducer(filter),
  });
}

const reducer = combineReducers({
  query: queryReducer,
  tracks: createReducer('tracks'),
  playlists: createReducer('playlists'),
  users: createReducer('users'),
});

export default reducer;
