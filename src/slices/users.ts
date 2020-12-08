import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
  city: string;
  name: string;
}

export type UserState = {
  user: User;
  loading: boolean;
};

const initialState: UserState = {
  user: {
    city: '',
    name: '',
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
      state.user.city = payload.city;
      state.user.name = payload.name;
      state.loading = false;
    },
    getUserFailure(state) {
      state.loading = false;
    },
  },
});

export const { getUserRequest, getUserFailure, getUserSuccess } = userSlice.actions;

export default userSlice.reducer;
