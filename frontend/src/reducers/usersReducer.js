import { RESET, USER_ADD } from '../actions/actionCreators';

const initialState = {
  users: [
    {
      id: 1,
      name: 'Sara',
      lastname: 'Jepsen',
      age: 25,
      email: 's',
      password: '1',
      categories: ['Food & Drinks', 'Music', 'Sports', 'Beauty & Wellness', 'Outdoor', 'Culture', 'Hobbies & Crafts'],
    },
    {
      id: 2,
      name: 'Sofie',
      lastname: 'Pedersen',
      age: 27,
      email: 'sofiewestphal@gmail.com',
      password: '123456',
      categories: ['Beauty & Wellness', 'Outdoor', 'Sports'],
    },
    {
      userId: 3,
      name: 'Gavin',
      lastname: 'Lerner',
      age: 27,
      email: 'gavinlerner@hotmail.com',
      password: '12345678',
      categories: ['Culture', 'Hobbies & Crafts', 'Outdoor', 'Sports'],
    },
  ],
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
