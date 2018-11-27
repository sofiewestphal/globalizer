import {
  CATEGORY_SET_CHECKED, ACTIVITY_ADD, USER_ADD, ACTIVITY_TOGGLE_ATTEND, WHEN_SET_CHECKED,
  AUTH_LOGIN,
  AUTH_LOGIN_SUCCESS,
} from './actionCreators';

export const login = (email, password) => ({
  type: AUTH_LOGIN,
  payload: {
    email,
    password,
  },
});

export const loginSucces = userId => ({
  type: AUTH_LOGIN_SUCCESS,
  payload: userId,
});

export const setCategoryChecked = label => ({
  type: CATEGORY_SET_CHECKED,
  payload: label,
});

export const setWhenChecked = label => ({
  type: WHEN_SET_CHECKED,
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
