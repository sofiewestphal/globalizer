import { RESET, ACTIVITY_ADD, ACTIVITY_TOGGLE_ATTEND } from '../actions/actionCreators';

const initialState = {
  activities: [],
};

export default function activitiesReducer(state = initialState, action) {
  switch (action.type) {
    case ACTIVITY_ADD:
      return ({
        ...state,
        nextId: state.nextId + 1,
        activities: [...state.activities, action.payload],
      });

    case ACTIVITY_TOGGLE_ATTEND:
      return ({
        ...state,
        activities: state.activities.map((activity) => {
          if (activity.id === action.payload.id) {
            return action.payload;
          }
          return activity;
        }),
      });
    case RESET:
      return (initialState);

    default:
      return state;
  }
}
