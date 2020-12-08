import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './users';

function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    user: userReducer,
    ...injectedReducers,
  });
  return rootReducer;
}
const rootReducer = createReducer();
export type RootState = ReturnType<typeof rootReducer>;

export default createReducer;
