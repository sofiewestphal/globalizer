import {
  CATEGORY_SET_CHECKED,
  ACTIVITY_ADD,
  ACTIVITY_TOGGLE_ATTEND,
  USER_ADD,
} from './actionCreators';

export const setCategoryChecked = label => ({
  type: CATEGORY_SET_CHECKED,
  payload: label,
});

export const addActivity = activity => ({
  type: ACTIVITY_ADD,
  payload: activity,
});

export const toggleAttend = updatedActivity => ({
  type: ACTIVITY_TOGGLE_ATTEND,
  payload: updatedActivity,
});

export const addUser = user => ({
  type: USER_ADD,
  payload: user,
});
