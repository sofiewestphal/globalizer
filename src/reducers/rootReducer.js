import { combineReducers } from 'redux';

import authReducer from './authReducer';
import userReducer from './userReducer';
import usersReducer from './usersReducer';
import activitiesReducer from './activitiesReducer';
import categoriesReducer from './categoriesReducer';

export default combineReducers({
  auth: authReducer,
  user: userReducer,
  users: usersReducer,
  activities: activitiesReducer,
  categories: categoriesReducer,
});
