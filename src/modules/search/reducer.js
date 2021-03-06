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
    if (action.type === actionTypes.SET_QUERY) {
      return [];
    }

    if (!action.payload || filter !== action.payload.filter) {
      return state;
    }

    switch (action.type) {
      case actionTypes.FETCH_RESOURCE_SUCCESS:
        return action.payload.result;

      case actionTypes.FETCH_RESOURCE_NEXT_PAGE:
        return [...state, ...action.payload.result];

      default:
        return state;
    }
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
      case actionTypes.FETCH_RESOURCE_NEXT_PAGE:
        return false;

      default:
        return state;
    }
  };
}

function lastReducer(filter) {
  return (state = INITIAL_STATE[filter].last, action = {}) => {
    if (!action.payload || filter !== action.payload.filter) {
      return state;
    }

    if (action.type === actionTypes.FETCH_RESOURCE_SUCCESS) {
      return action.payload.result;
    }

    return state;
  };
}

function nextPageReducer(filter) {
  return (state = INITIAL_STATE[filter].nextPage, action = {}) => {
    if (!action.payload || filter !== action.payload.filter) {
      return state;
    }

    switch (action.type) {
      case actionTypes.FETCH_RESOURCE_SUCCESS:
        return action.payload.nextPage;

      default:
        return state;
    }
  };
}

function createReducer(filter) {
  return combineReducers({
    results: resultsReducer(filter),
    fetching: fetchingReducer(filter),
    last: lastReducer(filter),
    nextPage: nextPageReducer(filter),
  });
}

const reducer = combineReducers({
  query: queryReducer,
  tracks: createReducer('tracks'),
  playlists: createReducer('playlists'),
  users: createReducer('users'),
});

export default reducer;
