import { createSlice } from '@reduxjs/toolkit';

export const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState: {
    email: '',
    password: '',
  },
  reducers: {
    setEmail: (state, input) => {
      state.email = input.payload;
    },
    setPassword: (state, input) => {
      state.password = input.payload;
    },
  },
});

export const { setEmail, setPassword } = userInfoSlice.actions;

export const getEmail = (state) => state.userInfo.email;
export const getPassword = (state) => state.userInfo.password;

export default userInfoSlice.reducer;
