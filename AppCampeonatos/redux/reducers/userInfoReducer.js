import { createSlice } from '@reduxjs/toolkit';

export const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState: {
    email: '',
    password: '',
    inscription: {},
  },
  reducers: {
    setEmail: (state, input) => {
      state.email = input.payload;
    },
    setPassword: (state, input) => {
      state.password = input.payload;
    },
    setInscription: (state, input) => {
      state.inscription = { ...state.inscription, ...input.payload };
    },
  },
});

export const { setEmail, setPassword, setInscription } = userInfoSlice.actions;

export const getEmail = (state) => state.userInfo.email;
export const getPassword = (state) => state.userInfo.password;
export const getInscription = (state) => state.userInfo.inscription;

export default userInfoSlice.reducer;
