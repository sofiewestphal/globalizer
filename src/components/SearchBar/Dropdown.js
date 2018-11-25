import React from 'react';
import PropTypes from 'prop-types';

const Dropdown = ({
  title, options, shown, handleClick,
}) => {
  let dropdownClassNames = 'dropdownContainer';
  if(title === 'Categories') {
    dropdownClassNames += ' categories';
  }
  if(shown) {
    dropdownClassNames += ' active';
  }

  if(options) {
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
              defaultChecked={option.checked}
              onClick={() => handleClick(option.label)}
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
