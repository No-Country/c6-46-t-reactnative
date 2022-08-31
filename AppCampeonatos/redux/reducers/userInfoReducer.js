import { createSlice } from '@reduxjs/toolkit';

export const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState: {
    email: '',
    password: '',
    inscriptions: {},
  },
  reducers: {
    setEmail: (state, input) => {
      state.email = input.payload;
    },
    setPassword: (state, input) => {
      state.password = input.payload;
    },
    setInscriptions: (state, input) => {
      state.inscriptions = { ...state.inscriptions, ...input.payload };
    },
    setInscriptionsDiscard: (state, input) => {
      const { [input.payload]: value, ...newState } = state.inscriptions;
      state.inscriptions = { ...newState };
    },
  },
});

export const {
  setEmail,
  setPassword,
  setInscriptions,
  setInscriptionsDiscard,
} = userInfoSlice.actions;

export const getEmail = (state) => state.userInfo.email;
export const getPassword = (state) => state.userInfo.password;
export const getInscriptions = (state) => state.userInfo.inscriptions;

export default userInfoSlice.reducer;
