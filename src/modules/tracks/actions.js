import { createAction } from 'redux-actions';

import * as actionTypes from './actionTypes';

// Action creators
export const setTracks = createAction(actionTypes.FETCH_TRACKS_SUCCESS);
