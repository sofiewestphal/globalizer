import { RESET } from '../actions/actionCreators';

const initialState = {
  activities: [],
};

export default function activitiesReducer(state = initialState, action) {
  switch(action.type) {
    case RESET:
      return(initialState);

    default:
      return state;
  }
}
