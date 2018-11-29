import React from 'react';
import PropTypes from 'prop-types';

const SelectFilter = (props) => {
  const { text } = props;
  return (
    <div className="selectedFilter">
      {typeof text === 'object' ? (
        text.map(t => <p>{t}</p>)
      ) : <p>{text}</p>}
    </div>
  );
};

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
