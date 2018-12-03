import {
  CATEGORY_SET_CHECKED,
  ACTIVITY_ADD,
  USER_ADD,
  ACTIVITY_TOGGLE_ATTEND,
  WHEN_SET_CHECKED,
  ATTENDEES_SET_RANGE,
  AUTH_LOGIN,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN_ERROR,
  ACTIVITY_FETCH,
  ACTIVITY_FETCH_SUCCESS,
  ACTIVITY_FETCH_ERROR,
  USERS_FETCH_REQUEST,
  USERS_FETCH_SUCCESS,
  USERS_FETCH_FAILURE,
} from './actionCreators';

/**
 * AUTH ACTIONS
*/

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

export const loginError = () => ({
  type: AUTH_LOGIN_ERROR,
});

/**
 * FILTERS ACTIONS
*/
export const setCategoryChecked = label => ({
  type: CATEGORY_SET_CHECKED,
  payload: label,
});

export const setWhenChecked = label => ({
  type: WHEN_SET_CHECKED,
  payload: label,
});

export const setAttendeesRange = newAttendees => ({
  type: ATTENDEES_SET_RANGE,
  payload: newAttendees,
});

/**
 * ACTIVITIES ACTIONS
 */

export const fetchActivitiesRequest = () => ({
  type: ACTIVITY_FETCH,
});

export const fetchActivitiesSuccess = activities => ({
  type: ACTIVITY_FETCH_SUCCESS,
  payload: activities,
});

export const fetchActivitiesFailure = error => ({
  type: ACTIVITY_FETCH_ERROR,
  payload: error,
});


export const addActivity = activity => ({
  type: ACTIVITY_ADD,
  payload: activity,
});

export const toggleAttend = updatedActivity => ({
  type: ACTIVITY_TOGGLE_ATTEND,
  payload: updatedActivity,
});

/**
 * USER ACTIONS
*/

export const addUser = user => ({
  type: USER_ADD,
  payload: user,
});

export const fetchUsersRequest = () => ({
  type: USERS_FETCH_REQUEST,
});

export const fetchUsersSuccess = activities => ({
  type: USERS_FETCH_SUCCESS,
  payload: activities,
});

export const fetchUsersFailure = error => ({
  type: USERS_FETCH_FAILURE,
  payload: error,
});
