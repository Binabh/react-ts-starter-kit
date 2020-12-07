import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './users';

const rootReducer = combineReducers({
  user: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
