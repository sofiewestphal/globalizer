import { combineReducers } from 'redux';

import authReducer from './authReducer';
import usersReducer from './usersReducer';
import activitiesReducer from './activitiesReducer';
import filtersReducer from './filtersReducer';

export default combineReducers({
  auth: authReducer,
  users: usersReducer,
  activities: activitiesReducer,
  filters: filtersReducer,
});
