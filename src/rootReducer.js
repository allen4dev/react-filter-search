import { combineReducers } from 'redux';

import feature from './modules/feature';

const rootReducer = combineReducers({
  [feature.constants.NAME]: feature.reducer,
});

export default rootReducer;
