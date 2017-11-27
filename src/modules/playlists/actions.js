import { createAction } from 'redux-actions';

import * as actionTypes from './actionTypes';

// Action creators
export const setPlaylists = createAction(actionTypes.FETCH_PLAYLISTS_SUCCESS);
