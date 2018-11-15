import { RESET } from '../actions/actionCreators';

const initialState = {
  isLogginIn: false,
  loginError: null,
  token: '',
};

export default function authReducer(state = initialState, action) {
  switch(action.type) {
    case RESET:
      return(initialState);

    default:
      return state;
  }
}
