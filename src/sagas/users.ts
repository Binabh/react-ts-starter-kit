import { put, takeLatest } from 'redux-saga/effects';
import { getUserRequest, getUserSuccess, getUserFailure } from 'src/slicers/users';

function* getUserTask() {
  try {
    yield put(getUserSuccess({ name: 'ok', city: 'ok' }));
  } catch (error) {
    yield put(getUserFailure());
  }
}

function* userWatcher() {
  yield takeLatest(getUserRequest.type, getUserTask);
}

export default userWatcher;
