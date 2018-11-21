import { RESET } from '../actions/actionCreators';

const initialState = [
  {
    id: 1,
    name: 'Sara',
    lastname: 'Jepsen',
    age: 25,
    email: 'saraaaroee@hotmail.com',
    password: '1234',
    categories: ['Food & Drinks', 'Music', 'Sports'],
  },
  {
    userId: 2,
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
];

export default function userReducer(state = initialState, action) {
  switch(action.type) {
    case RESET:
      return(initialState);

    default:
      return { ...state };
  }
}
