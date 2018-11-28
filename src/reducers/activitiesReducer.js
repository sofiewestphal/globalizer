import { RESET, ACTIVITY_ADD, ACTIVITY_TOGGLE_ATTEND } from '../actions/actionCreators';

const initialState = {
  nextId: 7,
  activities: [
    {
      id: 1,
      category: 'categories_nightlife',
      date: '2018-11-15',
      title: 'Malene\'s Birthday',
      location: 'LA Bar',
      startTime: '20:00',
      endTime: '',
      description: 'Kom på LA Bar og vær med til at fejre min fødselsdag. Vi starter med snørrebåndsleg, stopdans og dans med appelsiner. Senere er der fri dans. Der er fri bar den første time.',
      owner: 1,
      attendees: [2, 3],
      maxNumberOfAttendees: 10,

    },
    {
      id: 2,
      category: 'categories_outdoor',
      date: '2018-12-26',
      title: 'Climbing',
      location: 'Nørrebrohallen',
      startTime: '18:00',
      endTime: '',
      description: 'We are going climbing at Nørrebro\'s Klatreklub. It costs 50 krones for the entrance and then you can find old climbing shoes there in case you don\'t have your own shoes.',
      owner: 3,
      attendees: [2],
      maxNumberOfAttendees: 2,
    },
    {
      id: 3,
      category: 'categories_games',
      date: '2018-11-28',
      title: 'Pub Quiz',
      location: 'Angel',
      startTime: '20:00',
      endTime: '',
      description: 'Let\'s win this time!',
      owner: 2,
      attendees: [1, 3],
      maxNumberOfAttendees: 3,
    },
    {
      id: 4,
      category: 'categories_languages',
      date: '',
      title: 'Looking for a french language partner',
      location: 'København',
      startTime: '',
      endTime: '',
      description: 'I am looking for someone, who wants to meet up once a week and speak french.',
      owner: 2,
      attendees: [],
      maxNumberOfAttendees: 2,
    },
    {
      id: 5,
      category: 'categories_nightlife',
      date: '2018-11-27',
      title: 'Lets go to the pub',
      location: 'Tap House',
      startTime: '19:00',
      endTime: '',
      description: 'They have many beers!',
      owner: 3,
      attendees: [],
      maxNumberOfAttendees: 6,
    },
    {
      id: 6,
      category: 'categories_hobbiesCrafts',
      date: '2018-12-01',
      title: 'Lets make Christmas decorations',
      location: 'Absalon',
      startTime: '13:00',
      endTime: '15:00',
      description: 'They provide the material, just show up. Nissehue is highly appreciated.',
      owner: 1,
      attendees: [],
      maxNumberOfAttendees: 6,
    },
  ],
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
