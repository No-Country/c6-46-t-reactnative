import { configureStore } from '@reduxjs/toolkit';
import eventInfoReducer from './reducers/eventInfoReducer';
import isLoggedReducer from './reducers/isLoggedReducer';
import userInfoReducer from './reducers/userInfoReducer';
/* Redux Store; all reducers. Toolkit is amazing! */
export default configureStore({
  reducer: {
    isLoggedIn: isLoggedReducer,
    userInfo: userInfoReducer,
    eventInfo: eventInfoReducer,
  },
});
