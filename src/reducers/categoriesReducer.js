import { CATEGORY_SET_CHECKED, RESET } from '../actions/actionCreators';

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
    { label: 'Nightlife', id: 'categories_nightlift', checked: false },
    { label: 'Outdoor', id: 'categories_outdoor', checked: false },
    { label: 'Sports', id: 'categories_sports', checked: false },
  ],
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
    case RESET:
      return(initialState);

    default:
      return state;
  }
}
