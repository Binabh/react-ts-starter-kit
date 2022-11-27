/* eslint-disable import/no-import-module-exports */
import createSagaMiddleware from 'redux-saga';
import rootSaga from 'sagas';
import rootReducer from 'slices';
import { configureStore } from '@reduxjs/toolkit';
import type { PreloadedState } from '@reduxjs/toolkit';

const sagaMiddleware = createSagaMiddleware();

export default function createStore(preloadedState?: PreloadedState<typeof rootReducer>) {
  const store = configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
  });
  let sagaTask = sagaMiddleware.run(rootSaga);

  if (module.hot) {
    module.hot.accept('./slices', () => {
      const nextRootReducer = rootReducer;
      store.replaceReducer(nextRootReducer);
    });
    module.hot.accept('./sagas', () => {
      const nextRootSaga = rootSaga;
      sagaTask.cancel();
      sagaTask.toPromise().then(() => {
        sagaTask = sagaMiddleware.run(nextRootSaga);
      });
    });
  }

  return store;
}
