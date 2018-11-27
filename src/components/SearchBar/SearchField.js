import React from 'react';
import './index.scss';
import PropTypes from 'prop-types';
import { Search } from '../../assets/icons/icons';


const SearchField = (props) => {
  const { handleSearch, value } = props;
  return (
    <div className="input_container">
      <input
        id="searchInput"
        placeholder="Search activities..."
        value={value}
        onChange={event => handleSearch(event.target.value)}
      />
      <Search
        width="15px"
        height="15px"
      />
    </div>
  );
};

SearchField.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default SearchField;
