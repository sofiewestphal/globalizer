import { CATEGORY_SET_CHECKED, ACTIVITY_ADD } from './actionCreators';

export const setCategoryChecked = label => ({
  type: CATEGORY_SET_CHECKED,
  payload: label,
});

export const addActivity = activity => ({
  type: ACTIVITY_ADD,
  payload: activity,
});

export const addUser = user => ({
  type: ACTIVITY_ADD,
  payload: user,
});
