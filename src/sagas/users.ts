import { call, put, takeLatest } from 'redux-saga/effects';
import { getUser } from 'src/services/users';
import { getUserRequest, getUserSuccess, getUserFailure } from 'src/slices/users';

function* getUserTask() {
  try {
    const response = yield call(getUser);
    yield put(getUserSuccess(response.data));
  } catch (error) {
    yield put(getUserFailure());
  }
}

function* userWatcher() {
  yield takeLatest(getUserRequest.type, getUserTask);
}

export default userWatcher;
