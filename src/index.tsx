/* eslint-disable import/no-import-module-exports */
import { Provider } from 'react-redux';
import React from 'react';
import { createRoot } from 'react-dom/client';

import 'assets/css/main.css';

import App from './app';
import createStore from './store';

const store = createStore();
function render() {
  const container = document.getElementById('app');
  const root = createRoot(container);
  root.render(
    <Provider store={store}>
      <App />
    </Provider>,
  );
}

render();

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./app', render);
}
