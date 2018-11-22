import { RESET, ACTIVITY_ADD } from '../actions/actionCreators';

const initialState = {
  activities: [
    {
      category: 'categories_nightlife',
      date: '15. November 2018',
      title: 'Malene\'s Birthday',
      location: 'LA Bar',
      description: 'Kom på LA Bar og vær med til at fejre min fødselsdag. Vi starter med snørrebåndsleg, stopdans og dans med appelsiner. Senere er der fri dans. Der er fri bar den første time.',
      owner: 1,
      attendees: [2, 3],
      maxNumberOfAttendees: 10,

    },
    {
      category: 'categories_outdoor',
      date: '22. November 2018',
      title: 'Climbing',
      location: 'Nørrebrohallen',
      description: 'We are going climbing at Nørrebro\'s Klatreklub. It costs 50 krones for the entrance and then you can find old climbing shoes there in case you don\'t have your own shoes.',
      owner: 3,
      attendees: [2],
      maxNumberOfAttendees: 5,
    },
    {
      category: 'categories_games',
      date: '28. November 2018',
      title: 'Pub Quiz',
      location: 'Angel',
      description: 'Let\'s win this time!',
      owner: 2,
      attendees: [1],
      maxNumberOfAttendees: 6,
    }
  ],
};

export default function activitiesReducer(state = initialState, action) {
  switch(action.type) {
    case ACTIVITY_ADD:
      return ({
        ...state,
        activities: [...state.activities, action.payload],
      });
    case RESET:
      return(initialState);

    default:
      return state;
  }
}
