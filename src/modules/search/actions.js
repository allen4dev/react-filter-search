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

function setResults(filter, result) {
  return {
    type: actionTypes.FETCH_RESOURCE_SUCCESS,
    payload: { filter, result },
  };
}

export function requestResource(filter) {
  return {
    type: actionTypes.FETCH_RESOURCE_REQUEST,
    payload: { filter },
  };
}

export function searchTracks(term) {
  return async dispatch => {
    dispatch(requestResource('tracks'));

    const results = await api.tracks.searchTracks(term);
    const response = normalize(results, tracks.model.trackListSchema);

    dispatch(tracks.actions.setTracks(response));
    dispatch(setResults('tracks', response.result));

    return response.entities.tracks;
  };
}
