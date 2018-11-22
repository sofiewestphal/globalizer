import React from 'react';
import PropTypes from 'prop-types';

const Dropdown = ({ options }) => {

  return (
    <div className="dropdownActivityContainer categories active">
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
};

Dropdown.propTypes = {
  options: PropTypes.array.isRequired,
};

export default Dropdown;
