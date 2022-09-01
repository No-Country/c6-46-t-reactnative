import { createSlice } from '@reduxjs/toolkit';

/* Manages statge of logged user; this probably should be in userInfoReducer.js
but I don't want to break anything right now. Do better backlogs, mate!*/
export const isLoggedSlice = createSlice({
  name: 'isLoggedIn',
  initialState: {
    value: false,
  },
  reducers: {
    setLoggedState: (state) => {
      state.value = !state.value;
    },
  },
});

export const { setLoggedState } = isLoggedSlice.actions;

export const getLoggedState = (state) => state.isLoggedIn.value;

export default isLoggedSlice.reducer;
