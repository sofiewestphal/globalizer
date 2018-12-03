import { RESET, USER_ADD, USERS_FETCH_REQUEST, USERS_FETCH_SUCCESS, USERS_FETCH_FAILURE } from '../actions/actionCreators';

const initialState = {
  fetching: true,
  fetchingError: null,
  users: [
    {
      id: 1,
      name: 'Sara',
      lastname: 'Jepsen',
      dateOfBirth: '23/10/1993',
      language: 'Danish',
      secondLanguage: 'English',
      email: 's',
      password: '1',
      categories: ['Food & Drinks', 'Music', 'Sports', 'Beauty & Wellness', 'Outdoor', 'Culture', 'Hobbies & Crafts'],
      image: '',
    },
    {
      id: 2,
      name: 'Sofie',
      lastname: 'Pedersen',
      dateOfBirth: '15/6/1991',
      language: 'Danish',
      secondLanguage: 'English',
      email: 'sofiewestphal@gmail.com',
      password: '123456',
      categories: ['Beauty & Wellness', 'Outdoor', 'Sports'],
      image: '',
    },
    {
      id: 3,
      name: 'Gavin',
      lastname: 'Lerner',
      dateOfBirth: '16/7/1991',
      language: 'English',
      secondLanguage: '',
      email: 'gavinlerner@hotmail.com',
      password: '12345678',
      categories: ['Culture', 'Hobbies & Crafts', 'Outdoor', 'Sports'],
      image: '',
    },
  ],
};

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case USERS_FETCH_REQUEST:
      return ({
        ...state,
        fetching: true,
      });

    case USERS_FETCH_SUCCESS:
      return({
        ...state,
        fetching: false,
        users: [...state.users, ...action.payload],
      });

    case USERS_FETCH_FAILURE:
      return({
        ...state,
        fetching: false,
        fetchingError: action.payload,
      });

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