import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './users';

function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    user: userReducer,
    ...injectedReducers,
  });
  return rootReducer;
}
export type RootState = ReturnType<typeof createReducer>;

export default createReducer;
