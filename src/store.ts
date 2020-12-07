/* eslint-disable operator-linebreak */
/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/no-var-requires */
import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, compose, createStore } from 'redux';
import { createInjectorsEnhancer } from 'redux-injectors';
import rootSaga from 'src/sagas';
import createReducer from './slicers';

const initialState = {};
const sagaMiddleware = createSagaMiddleware();

export default function configureStore() {
  const middlewares = [sagaMiddleware];
  const ENV = process.env.NODE_ENV;
  let composeEnhancers = compose;

  if (ENV !== 'production') {
    const composeWithDevToolsExtension =
      (window && ((window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ as typeof compose)) ||
      compose;
    if (typeof composeWithDevToolsExtension === 'function') {
      composeEnhancers = composeWithDevToolsExtension;
    }
  }

  const store = createStore(
    createReducer(),
    initialState,
    composeEnhancers(applyMiddleware(...middlewares)),
  );

  let sagaTask = sagaMiddleware.run(rootSaga);

  if (module.hot) {
    module.hot.accept('./slicers', () => {
      const nextRootReducer = require('./slicers').default;
      store.replaceReducer(nextRootReducer);
    });
    module.hot.accept('./sagas', () => {
      const nextRootSaga = require('./sagas').default;
      sagaTask.cancel();
      sagaTask.toPromise().then(() => {
        sagaTask = sagaMiddleware.run(nextRootSaga);
      });
    });
  }

  return { store };
}
