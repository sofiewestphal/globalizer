import React from 'react';
import PropTypes from 'prop-types';
import RangeSlider from '../RangeSlider';

const Dropdown = (props) => {
  const {
    title,
    options,
    shown,
    handleClick,
  } = props;

  let dropdownClassNames = 'dropdownContainer';
  if (title === 'Categories') {
    dropdownClassNames += ' categories';
  }
  if (shown) {
    dropdownClassNames += ' active';
  }

  if (options) {
    return (
      <div className={dropdownClassNames}>
        {options.map(option => (
          <label
            className="optionContainer"
            htmlFor={option.id}
            key={option.id}
          >
            <p>{option.label}</p>
            <input
              id={option.id}
              type="checkbox"
              checked={option.checked}
              onChange={() => handleClick(option.label)}
            />
            <span className="checkmark" />
          </label>
        ))}
      </div>
    );
  }
  return (
    <div className={dropdownClassNames}>
      <p>Number of Attendees</p>
      <RangeSlider
        handleClick={handleClick}
      />
    </div>
  );
};

Dropdown.propTypes = {
  title: PropTypes.string.isRequired,
  shown: PropTypes.bool.isRequired,
  options: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool,
  ]),
  handleClick: PropTypes.func.isRequired,
};

Dropdown.defaultProps = {
  options: false,
};

export default Dropdown;
