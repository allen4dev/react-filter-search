import { combineReducers } from 'redux';

import tracks from './modules/tracks';

const rootReducer = combineReducers({
  [tracks.constants.NAME]: tracks.reducer,
});

export default rootReducer;
