import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
  name: string;
  followers: number;
  following: number;
}

export type UserState = {
  user: User;
  loading: boolean;
};

const initialState: UserState = {
  user: {
    name: '',
    followers: 0,
    following: 0,
  },
  loading: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getUserRequest(state, { payload }: PayloadAction<string>) {
      state.loading = true;
    },
    getUserSuccess(state, { payload }: PayloadAction<User>) {
      state.user.name = payload.name;
      state.user.followers = payload.followers;
      state.user.following = payload.following;
      state.loading = false;
    },
    getUserFailure(state) {
      state.loading = false;
    },
  },
});

export const { getUserRequest, getUserFailure, getUserSuccess } = userSlice.actions;

export default userSlice.reducer;
