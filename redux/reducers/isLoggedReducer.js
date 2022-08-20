import { createSlice } from '@reduxjs/toolkit';

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
