/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/no-var-requires */
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './slicers';

const store = configureStore({
  reducer: rootReducer,
});

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./slicers', () => {
    const newRootReducer = require('./slicers').default;
    store.replaceReducer(newRootReducer);
  });
}

export type AppDispatch = typeof store.dispatch;

export default store;
