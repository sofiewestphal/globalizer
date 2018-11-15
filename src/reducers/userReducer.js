import { RESET } from '../actions/actionCreators';

const initialState = {
  userId: null,
  name: '',
  lastname: '',
  age: 0,
  email: '',
  password: '',
  ownedActivities: [],
  attendingActivities: [],
};

export default function userReducer(state = initialState, action) {
  switch(action.type) {
    case RESET:
      return(initialState);

    default:
      return { ...state };
  }
}
