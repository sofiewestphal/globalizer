import React from 'react';
import PropTypes from 'prop-types';

const SelectFilter = (props) => {
  const { text } = props;
  return (
    <div className="selectedFilter">
      {typeof text === 'object' ? (
        text.map(t => <p key={t}>{t}</p>)
      ) : <p>{text}</p>}
    </div>
  );
};

SelectFilter.propTypes = {
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
  ]),
};

SelectFilter.defaultProps = {
  text: '',
};


export default SelectFilter;
