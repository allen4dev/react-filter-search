import { normalize } from 'normalizr';

import * as actionTypes from './actionTypes';

import tracks from './../tracks';

import api from './../../utils/api';

export function setQuery(query) {
  return {
    type: actionTypes.SET_QUERY,
    payload: query,
  };
}

function setTracks(filter, result) {
  return {
    type: actionTypes.SET_TRACKS,
    payload: result,
  };
}

export function searchTracks(term) {
  return async dispatch => {
    dispatch(tracks.requestTracks());

    const results = await api.tracks.searchTracks(term);
    const response = normalize(results, tracks.model.trackListSchema);

    dispatch(tracks.setTracks(response));
    dispatch(setTracks('filter', response.result));

    return response.entities.tracks;
  };
}
