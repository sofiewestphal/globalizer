import React from 'react';
import PropTypes from 'prop-types';

const Dropdown = ({ options, shown }) => {
  let dropdownClassNames = 'dropdownActivityContainer';
  if (shown) {
    dropdownClassNames += ' active';
  }
  if (options) {
    return (
      <div className={dropdownClassNames}>
        {options.map(option => (
          <label
            className="optionContainer"
            id={option.id}
            key={option.id}
          >
            <p>{option.label}</p>
            <input type="checkbox" defaultChecked={option.checked} />
            <span className="checkmark" />
          </label>
        ))}
      </div>
    );
  }
  return (
    <div className={dropdownClassNames}>
      <p>*</p>
    </div>
  );
};

Dropdown.propTypes = {
  shown: PropTypes.bool.isRequired,
  options: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool,
  ]),
};

Dropdown.defaultProps = {
  options: false,
};

export default Dropdown;
