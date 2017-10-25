import { normalize } from 'normalizr';

import * as actionTypes from './actionTypes';

import { playlistListSchema } from './model';

import api from './../../utils/api';

// Action creators
export function setPlaylists(response) {
  return {
    type: actionTypes.FETCH_PLAYLISTS_SUCCESS,
    response,
  };
}

export function requestPlaylists() {
  return {
    type: actionTypes.FETCH_PLAYLISTS_REQUEST,
  };
}

// Async actions
export function searchPlaylists(term) {
  return async dispatch => {
    dispatch(requestPlaylists());

    const results = await api.playlists.searchPlaylists(term);
    const response = normalize(results, playlistListSchema);

    dispatch(setPlaylists(response));

    return response.entities.playlists;
  };
}
