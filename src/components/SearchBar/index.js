import React from 'react';
import './index.scss';
import SearchBarOption from './SearchBarOption';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      When: false,
      Attendees: false,
      Categories: false,
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
    const { When, Attendees, Categories } = this.state;
    return (
      <div className="row">
        <div className="col-xs-12 col-sm-10 col-sm-offset-1 searchbarContainer">
          <input placeholder="Search activities..." />
          <SearchBarOption
            title="When"
            active={When}
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
            handleClick={title => this.handleOptionClick(title)}
          />
        </div>
      </div>
    );
  }
}

export default SearchBar;
