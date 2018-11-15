import { RESET } from '../actions/actionCreators';

const initialState = {
  categories: [],
};

export default function categoriesReducer(state = initialState, action) {
  switch(action.type) {
    case RESET:
      return(initialState);

    default:
      return state;
  }
}
