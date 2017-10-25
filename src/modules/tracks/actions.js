import { normalize } from 'normalizr';

import * as actionTypes from './actionTypes';

import { trackListSchema } from './model';

import api from './../../utils/api';

// Action creators
export function setTracks(response) {
  return {
    type: actionTypes.FETCH_TRACKS_SUCCESS,
    response,
  };
}

export function requestTracks() {
  return {
    type: actionTypes.FETCH_TRACKS_REQUEST,
  };
}

// Async actions
export function searchTracks(term) {
  return async dispatch => {
    dispatch(requestTracks());

    const results = await api.tracks.searchTracks(term);
    const response = normalize(results, trackListSchema);

    dispatch(setTracks(response));

    return response.entities.tracks;
  };
}
