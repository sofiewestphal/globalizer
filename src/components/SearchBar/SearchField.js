import React from 'react';
import './index.scss';
import PropTypes from 'prop-types';
// import { Search } from '../../assets/icons/icons';


const SearchField = (props) => {
  const { onSearch } = props;
  return (
    <div id="input_container">
      <input
        id="searchInput"
        placeholder="Search activities..."
        onChangeText={onSearch}
      />
      {/* <Search
        width="20px"
        height="20px"
      /> */}
    </div>
  );
};

SearchField.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchField;
