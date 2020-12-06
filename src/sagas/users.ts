import { call, put, takeLatest } from 'redux-saga/effects';
import { getUser } from 'src/services/users';
import userActions, { Types } from 'src/actions/users';

export function* getUserRequest(action: { type: typeof Types.GET_USER_REQUEST; payload: string }) {
  try {
    const { payload } = action;
    const response = yield call(getUser, payload);
    yield put(userActions.getUserSuccess({ user: response.data }));
  } catch (error) {
    yield put(userActions.getUserFAilure());
  }
}

function* usersWatcher() {
  yield takeLatest(Types.GET_USER_REQUEST, getUserRequest);
}
export default usersWatcher;
