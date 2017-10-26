import { normalize } from 'normalizr';

import * as actionTypes from './actionTypes';

import tracks from './../tracks';
import playlists from './../playlists';
import users from './../users';

import api from './../../utils/api';

export function setQuery(query) {
  return {
    type: actionTypes.SET_QUERY,
    payload: query,
  };
}

function setResults(filter, result, nextPage) {
  return {
    type: actionTypes.FETCH_RESOURCE_SUCCESS,
    payload: { filter, result, nextPage },
  };
}

export function requestResource(filter) {
  return {
    type: actionTypes.FETCH_RESOURCE_REQUEST,
    payload: { filter },
  };
}

// Async actions

export function searchTracks(term) {
  return async dispatch => {
    dispatch(requestResource('tracks'));

    const results = await api.tracks.searchTracks(term);

    const response = normalize(
      results.collection,
      tracks.model.trackListSchema
    );

    let nextPage = null;

    if (results.next_href) {
      nextPage = results.next_href;
    }

    dispatch(tracks.actions.setTracks(response));
    dispatch(setResults('tracks', response.result, nextPage));

    return response.entities.tracks;
  };
}

export function searchPlaylists(term) {
  return async dispatch => {
    dispatch(requestResource('playlists'));

    const results = await api.playlists.searchPlaylists(term);
    const response = normalize(results, playlists.model.playlistListSchema);

    dispatch(playlists.actions.setPlaylists(response));
    dispatch(setResults('playlists', response.result));

    return response.entities.playlists;
  };
}

export function searchUsers(term) {
  return async dispatch => {
    dispatch(requestResource('users'));

    const results = await api.users.searchUsers(term);
    const response = normalize(results, users.model.userListSchema);

    dispatch(users.actions.setUsers(response));
    dispatch(setResults('users', response.result));

    return response.entities.users;
  };
}
