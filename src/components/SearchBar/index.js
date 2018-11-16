import React from 'react';
import './index.scss';
import arrowIcon from '../../assets/Images/other_icons/arrow_icon.svg';
import SearchBarOption from './SearchBarOption';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      when: false,
      attendees: false,
      categories: false,
    };
  }

  render() {
    return (
      <div className="row">
        <div className="col-xs-12 col-sm-10 col-sm-offset-1 searchbarContainer">
          <input />
          <SearchBarOption
            title="When"
          />
          <SearchBarOption
            title="Attendees"
          />
          <SearchBarOption
            title="Categories"
          />
        </div>
      </div>
    );
  }
}

const searchBarOption = (props) => {
  const { title } = props;
  return(
    <div>
      <p>
        {title}
        <span>
          <img src={arrowIcon} alt="arrow down" />
        </span>
      </p>
    </div>
  );
}

export default SearchBar;
