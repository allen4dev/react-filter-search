import React from 'react';
import { Provider } from 'react-redux';

import Results from './pages/Results';

import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Results />
      </div>
    </Provider>
  );
};

export default App;
