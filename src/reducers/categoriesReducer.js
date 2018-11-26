import { CATEGORY_SET_CHECKED, RESET, WHEN_SET_CHECKED } from '../actions/actionCreators';

const initialState = {
  categories: [
    { label: 'Beauty & Wellness', id: 'categories_beautyWellness', checked: false },
    { label: 'Culture', id: 'categories_culture', checked: false },
    { label: 'Family', id: 'categories_family', checked: false },
    { label: 'Food & Drinks', id: 'categories_foodDrinks', checked: false },
    { label: 'Games', id: 'categories_games', checked: false },
    { label: 'Hobbies & Crafts', id: 'categories_hobbiesCrafts', checked: false },
    { label: 'Languages', id: 'categories_languages', checked: false },
    { label: 'Movies', id: 'categories_movies', checked: false },
    { label: 'Music', id: 'categories_music', checked: false },
    { label: 'Nightlife', id: 'categories_nightlife', checked: false },
    { label: 'Outdoor', id: 'categories_outdoor', checked: false },
    { label: 'Sports', id: 'categories_sports', checked: false },
  ],
  when: [
    { label: 'Any time', id: 'when_anytime', checked: true },
    { label: 'Today', id: 'when_today', checked: false },
    { label: 'Tomorrow', id: 'when_tomorrow', checked: false },
    { label: 'This week', id: 'when_thisWeek', checked: false },
    { label: 'This month', id: 'when_thisMonth', checked: false },
  ],
  attendees: {
    min: 2,
    max: 30,
  },
};

export default function categoriesReducer(state = initialState, action) {
  switch(action.type) {
    case CATEGORY_SET_CHECKED:
      return({
        ...state,
        categories: state.categories.map((category) => {
          if(category.label === action.payload) {
            return {
              ...category,
              checked: !category.checked,
            };
          }
          return { ...category };
        }),
      });

    case WHEN_SET_CHECKED:
      return({
        ...state,
        when: action.payload,
      });
    case RESET:
      return(initialState);

    default:
      return state;
  }
}
