import { configureStore } from '@reduxjs/toolkit';
import isLoggedReducer from './reducers/isLoggedReducer';
import userInfoReducer from './reducers/userInfoReducer';

export default configureStore({
  reducer: {
    isLoggedIn: isLoggedReducer,
    userInfo: userInfoReducer,
  },
});
