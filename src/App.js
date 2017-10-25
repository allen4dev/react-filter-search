import React from 'react';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';

import Results from './pages/Results';

import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Route path="/" component={Results} />
      </div>
    </Provider>
  );
};

export default App;
