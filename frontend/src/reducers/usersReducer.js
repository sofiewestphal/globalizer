import { RESET, USER_ADD } from '../actions/actionCreators';

const initialState = {
  users: [],
};

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case USER_ADD:
      return ({
        ...state,
        users: [...state.users, action.payload],
      });
    case RESET:
      return (initialState);

    default:
      return state;
  }
}
