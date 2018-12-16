import {
  RESET, AUTH_LOGIN, AUTH_LOGIN_SUCCESS, AUTH_LOGIN_ERROR,
} from '../actions/actionCreators';

const initialState = {
  userId: '',
  isLogginIn: false,
  loginError: null,
  token: '',
};

export default function authReducer(state = initialState, action) {
  switch(action.type) {
    case AUTH_LOGIN:
      return {
        ...state,
        isLogginIn: true,
      };
    case AUTH_LOGIN_SUCCESS:
      return {
        ...state,
        isLogginIn: false,
        userId: action.payload,
      };
    case AUTH_LOGIN_ERROR:
      return {
        ...state,
        isLogginIn: false,
      };
    case RESET:
      // this still have to be spread event if you return initial state
      // to avoid mutation
      // if you keep it without spreading I believe redux should not even track the change
      // I might be wrong though
      return {
        ...state,
        ...initialState
      };

    default:
      return state;
  }
}
