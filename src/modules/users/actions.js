import { createAction } from 'redux-actions';
import * as actionTypes from './actionTypes';

// Action creators
export const setUsers = createAction(actionTypes.FETCH_USERS_SUCCESS);
