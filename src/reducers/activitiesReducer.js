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
      date: '2019-01-28',
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
      date: '2018-12-27',
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
    {
      id: 7,
      category: 'categories_movies',
      date: '2019-02-06',
      title: 'CPH:DOX x Social Foodies',
      location: 'Empire Bio',
      startTime: '16:00',
      endTime: '22:00',
      description: 'Found this event on Facebook, and it seems super nice. Who is up for joining? They are showing a couple of documentaries about food waste, and afterwards there will be snacks and drinks sponsered by Social Foodies.',
      owner: 3,
      attendees: [],
      maxNumberOfAttendees: 6,
    },
    {
      id: 8,
      category: 'categories_beautyWellness',
      date: '2019-01-01',
      title: 'Detox day',
      location: 'Yin Detox Center',
      startTime: '11:00',
      endTime: '16:00',
      description: 'New year, new me! Let us cleanse to release harmful toxins from New Years Eve, and begin the year of 2019 being fresh as a green apple. There will be healthy shakes, a selection of power food and plenty of clean and fresh water. Enjoy life. Namaste!',
      owner: 2,
      attendees: [],
      maxNumberOfAttendees: 15,
    },
    {
      id: 9,
      category: 'categories_outdoor',
      date: '2018-12-11',
      title: 'Campfire & marshmallows',
      location: 'Amagerstrand',
      startTime: '20:00',
      endTime: '00:00',
      description: 'Put on a warm jacket, bring some beers and a good mood! I will take care of the campfire, the sticks and the marshmallows. I will also bring my guitar, so that we can sing some songs. Hope you will join!',
      owner: 2,
      attendees: [5, 10],
      maxNumberOfAttendees: 10,
    },
    {
      id: 10,
      category: 'categories_foodDrinks',
      date: '2018-12-20',
      title: '"Pebernødder" in the making',
      location: 'Liljeskolen, skolekøkken',
      startTime: '10:00',
      endTime: '15:00',
      description: 'We will try to speak in Danish while baking the delicious "pebernødder". Meet me at the main entrance in front of the school. See you!',
      owner: 2,
      attendees: [2, 8],
      maxNumberOfAttendees: 8,
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
