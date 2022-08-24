import { configureStore } from '@reduxjs/toolkit';
import eventInfoReducer from './reducers/eventInfoReducer';
import isLoggedReducer from './reducers/isLoggedReducer';
import userInfoReducer from './reducers/userInfoReducer';

export default configureStore({
  reducer: {
    isLoggedIn: isLoggedReducer,
    userInfo: userInfoReducer,
    eventInfo: eventInfoReducer,
  },
});
