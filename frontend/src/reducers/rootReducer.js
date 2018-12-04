import { combineReducers } from 'redux';

import authReducer from './authReducer';
import usersReducer from './usersReducer';
import activitiesReducer from './activitiesReducer';
import categoriesReducer from './categoriesReducer';

export default combineReducers({
  auth: authReducer,
  users: usersReducer,
  activities: activitiesReducer,
  categories: categoriesReducer,
});
