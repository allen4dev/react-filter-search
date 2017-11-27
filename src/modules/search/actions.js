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

function setResultsNextPage(filter, result, nextPage) {
  return {
    type: actionTypes.FETCH_RESOURCE_NEXT_PAGE,
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

    dispatch(tracks.actions.setTracks(response));
    dispatch(setResults('tracks', response.result, results.next_href));

    return response.entities.tracks;
  };
}

export function searchTracksNextPage() {
  return async (dispatch, getState) => {
    dispatch(requestResource('tracks'));

    const url = getState().search.tracks.nextPage;
    const results = await api.tracks.searchNextPage(url);

    const response = normalize(
      results.collection,
      tracks.model.trackListSchema
    );

    dispatch(tracks.actions.setTracks(response));
    dispatch(setResultsNextPage('tracks', response.result, results.next_href));

    return response.entities.tracks;
  };
}

export function searchPlaylists(term) {
  return async dispatch => {
    dispatch(requestResource('playlists'));

    const results = await api.playlists.searchPlaylists(term);
    const response = normalize(
      results.collection,
      playlists.model.playlistListSchema
    );

    dispatch(playlists.actions.setPlaylists(response));
    dispatch(setResults('playlists', response.result, results.next_href));

    return response.entities.playlists;
  };
}

export function searchPlaylistsNextPage() {
  return async (dispatch, getState) => {
    dispatch(requestResource('playlists'));

    const url = getState().search.playlists.nextPage;
    const results = await api.playlists.searchNextPage(url);

    const response = normalize(
      results.collection,
      playlists.model.playlistListSchema
    );

    dispatch(playlists.actions.setPlaylists(response));
    dispatch(
      setResultsNextPage('playlists', response.result, results.next_href)
    );

    return response.entities.playlists;
  };
}

export function searchUsers(term) {
  return async dispatch => {
    dispatch(requestResource('users'));

    const results = await api.users.searchUsers(term);
    const response = normalize(results.collection, users.model.userListSchema);

    dispatch(users.actions.setUsers(response));
    dispatch(setResults('users', response.result, results.next_href));

    return response.entities.users;
  };
}

export function searchUsersNextPage() {
  return async (dispatch, getState) => {
    dispatch(requestResource('users'));

    const url = getState().search.users.nextPage;
    const results = await api.users.searchNextPage(url);

    const response = normalize(results.collection, users.model.userListSchema);

    dispatch(users.actions.setUsers(response));
    dispatch(setResultsNextPage('users', response.result, results.next_href));

    return response.entities.users;
  };
}
