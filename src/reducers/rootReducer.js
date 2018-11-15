import { combineReducers } from 'redux';

import authReducer from './authReducer';
import userReducer from './userReducer';
import activitiesReducer from './activitiesReducer';
import categoriesReducer from './categoriesReducer';

export default combineReducers({
  auth: authReducer,
  user: userReducer,
  activities: activitiesReducer,
  categories: categoriesReducer,
});
