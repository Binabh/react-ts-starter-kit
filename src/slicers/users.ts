import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
  city: string;
  name: string;
}

type UserState = {
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
    getUserRequest(state) {
      state.loading = true;
    },
  },
});

export const { getUserRequest } = userSlice.actions;

export default userSlice.reducer;
