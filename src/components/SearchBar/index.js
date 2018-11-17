import React from 'react';
import './index.scss';
import SearchBarOption from './SearchBarOption';
import Dropdown from './Dropdown';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      When: false,
      Attendees: false,
      Categories: false,
      whenOptions: [
        { label: 'today', id: 'when_today', checked: false },
        { label: 'tomorrow', id: 'when_tomorrow', checked: true },
      ],
      categoriesOptions: [
        { label: 'Beauty & Wellness', id: 'categories_beauti', checked: false },
        { label: 'Culture', id: 'categories_culture', checked: true },
      ],
    };
  }

  handleOptionClick = (title) => {
    const newTitleState = !this.state[title];

    this.setState({
      When: false,
      Attendees: false,
      Categories: false,
      [title]: newTitleState,
    });
  }

  render() {
    const { When, Attendees, Categories, whenOptions, categoriesOptions } = this.state;
    return (
      <div className="row">
        <div className="col-xs-12 col-sm-10 col-sm-offset-1 searchbarContainer">
          <input placeholder="Search activities..." />
          <SearchBarOption
            title="When"
            active={When}
            options={whenOptions}
            handleClick={title => this.handleOptionClick(title)}
          />
          <SearchBarOption
            title="Attendees"
            active={Attendees}
            handleClick={title => this.handleOptionClick(title)}
          />
          <SearchBarOption
            title="Categories"
            active={Categories}
            options={categoriesOptions}
            handleClick={title => this.handleOptionClick(title)}
          />
        </div>
      </div>
    );
  }
}

export default SearchBar;
