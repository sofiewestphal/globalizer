import React from 'react';
import './index.scss';
import SearchBarOption from './SearchBarOption';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      when: false,
      attendees: false,
      categories: false,
      whenOptions: [
        { label: 'Any time', id: 'when_anytime', checked: true },
        { label: 'Today', id: 'when_today', checked: false },
        { label: 'Tomorrow', id: 'when_tomorrow', checked: false },
        { label: 'This week', id: 'when_thisWeek', checked: false },
        { label: 'This month', id: 'when_thisMonth', checked: false },
      ],
      categoriesOptions: [
        { label: 'Beauty & Wellness', id: 'categories_beautyWellness', checked: false },
        { label: 'Culture', id: 'categories_culture', checked: true },
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
  }

  handleOptionClick = (optionTitle) => {
    const newTitleState = !this.state[optionTitle];

    this.setState({
      when: false,
      attendees: false,
      categories: false,
      [optionTitle]: newTitleState,
    });
  }

  render() {
    const {
      when, attendees, categories, whenOptions, categoriesOptions,
    } = this.state;
    return (
      <div className="row">
        <div className="col-xs-12 col-sm-10 col-sm-offset-1">
          <div className="searchbarContainer">
            <div className="row">
              <div className="col-xs-12 col-sm-4">
                <input id="searchInput" placeholder="Search activities..." />
              </div>
              <div className="col-xs-12 col-sm-2">
                <SearchBarOption
                  title="When"
                  optionTitle="when"
                  active={when}
                  options={whenOptions}
                  handleClick={title => this.handleOptionClick(title)}
                />
              </div>
              <div className="col-xs-12 col-sm-3">
                <SearchBarOption
                  title="Attendees"
                  optionTitle="attendees"
                  active={attendees}
                  handleClick={title => this.handleOptionClick(title)}
                />
              </div>
              <div className="col-xs-12 col-sm-3">
                <SearchBarOption
                  title="Categories"
                  optionTitle="categories"
                  active={categories}
                  options={categoriesOptions}
                  handleClick={title => this.handleOptionClick(title)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
