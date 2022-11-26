import { call, put, takeLatest } from 'redux-saga/effects';
import { getUser } from 'services/users';
import { getUserRequest, getUserSuccess, getUserFailure } from 'slices/users';

function* getUserTask(action: { payload: string }) {
  const { payload } = action;
  try {
    const response = yield call(getUser, payload);
    yield put(getUserSuccess(response.data));
  } catch (error) {
    yield put(getUserFailure());
  }
}

function* userWatcher() {
  yield takeLatest(getUserRequest, getUserTask);
}

export default userWatcher;
