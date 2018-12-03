import {
  RESET, AUTH_LOGIN, AUTH_LOGIN_SUCCESS, AUTH_LOGIN_ERROR,
} from '../actions/actionCreators';

const initialState = {
  userId: '',
  isLogginIn: false,
  loginError: null,
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
      return(initialState);

    default:
      return state;
  }
}
