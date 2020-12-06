import { createReducer } from 'reduxsauce';
import { Types } from 'src/actions/users';

const initialState = {
  loading: true,
};

const getUserRequest = (state: { loading: boolean }) => ({ ...state, loading: true });
const getUserSuccess = (state: { loading: boolean }) => ({ ...state, loading: false });
const getUserFailure = (state: { loading: boolean }) => ({ ...state, loading: false });

const userReducer = createReducer(initialState, {
  [Types.GET_USER_REQUEST]: getUserRequest,
  [Types.GET_USER_SUCCESS]: getUserSuccess,
  [Types.GET_USER_FAILURE]: getUserFailure,
});

export default userReducer;
