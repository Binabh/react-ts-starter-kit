import { all } from 'redux-saga/effects';
import userWatcher from './users';

function* rootSaga() {
  yield all([userWatcher()]);
}

export default rootSaga;
