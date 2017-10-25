import { normalize } from 'normalizr';

import * as actionTypes from './actionTypes';

import { userListSchema } from './model';

import api from './../../utils/api';

// Action creators
export function setUsers(response) {
  return {
    type: actionTypes.FETCH_USERS_SUCCESS,
    response,
  };
}

export function requestUsers() {
  return {
    type: actionTypes.FETCH_USERS_REQUEST,
  };
}

// Async actions
export function searchUsers(term) {
  return async dispatch => {
    dispatch(requestUsers());

    const results = await api.users.searchUsers(term);
    const response = normalize(results, userListSchema);

    dispatch(setUsers(response));

    return response.entities.users;
  };
}
