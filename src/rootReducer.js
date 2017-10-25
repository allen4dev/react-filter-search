import { combineReducers } from 'redux';

import tracks from './modules/tracks';
import playlists from './modules/playlists';

const rootReducer = combineReducers({
  [tracks.constants.NAME]: tracks.reducer,
  [playlists.constants.NAME]: playlists.reducer,
});

export default rootReducer;
