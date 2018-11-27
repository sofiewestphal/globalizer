import React from 'react';
import PropTypes from 'prop-types';

const SelectFilter = (props) => {
  const { text } = props;
  return (
    <div className="selectedFilter">
      <p>{text}</p>
    </div>
  );
};

SelectFilter.propTypes = {
  text: PropTypes.string.isRequired,
};

export default SelectFilter;
