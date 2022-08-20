import { configureStore } from '@reduxjs/toolkit';
import isLoggedReducer from './reducers/isLoggedReducer';

export default configureStore({
  reducer: {
    isLoggedIn: isLoggedReducer,
  },
});
