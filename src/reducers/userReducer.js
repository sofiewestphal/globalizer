import { RESET } from '../actions/actionCreators';

const initialState = {
  id: 1,
  name: 'Sara',
  lastname: 'Jepsen',
  age: 25,
  email: 'saraaaroee@hotmail.com',
  password: '1234',
  categories: ['Food & Drinks', 'Music', 'Sports'],
};

export default function userReducer(state = initialState, action) {
  switch(action.type) {
    case RESET:
      return(initialState);

    default:
      return { ...state };
  }
}
