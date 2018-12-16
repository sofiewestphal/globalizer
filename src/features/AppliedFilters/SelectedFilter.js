import React from 'react';
import PropTypes from 'prop-types';

const SelectFilter = ({ text }) => (
  <div className="selectedFilter">
    {/* that looks weird, why do you need to check is this is an object? */}
    {typeof text === 'object' ? (
      text.map(t => <p>{t}</p>)
    ) : <p>{text}</p>}
  </div>
);

SelectFilter.propTypes = {
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
  ]),
};

SelectFilter.defaultProps = {
  text: '',
};


export default SelectFilter;
