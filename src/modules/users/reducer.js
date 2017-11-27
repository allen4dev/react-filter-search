import { combineReducers } from 'redux';
import { handleAction } from 'redux-actions';

import * as actionTypes from './actionTypes';
import { INITIAL_STATE } from './model';

const entitiesReducer = handleAction(
  actionTypes.FETCH_USERS_SUCCESS,
  (state, { payload: { entities } }) => ({ ...state, ...entities.users }),
  INITIAL_STATE.entities
);

const reducer = combineReducers({
  entities: entitiesReducer,
});

export default reducer;
