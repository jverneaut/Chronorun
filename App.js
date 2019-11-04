import React from 'react';
import { Provider } from 'react-redux';

import store from './redux/store';

import Home from './components/Home';

export default App = () => (
  <Provider store={store}>
    <Home />
  </Provider>
);
