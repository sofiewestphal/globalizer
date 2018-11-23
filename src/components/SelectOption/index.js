import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const SelectOption = (props) => {
  const {
    labelName, options, handleSelect, currentlySelected,
  } = props;

  return (
    <div className="row">
      <div className="col-xs-12">
        <h4>{labelName}</h4>
        <div className="categoriesContainer">
          {options.map(option => (
            <label
              className="optionContainer"
              id={option.id}
              key={option.id}
            >
              <p>{option.label}</p>
              <input
                onChange={() => handleSelect(option.label)}
                type="checkbox"
                checked={currentlySelected === option.label}
              />
              <span className="checkmark" />
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

SelectOption.propTypes = {
  labelName: PropTypes.string.isRequired,
  currentlySelected: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  handleSelect: PropTypes.func.isRequired,
};

export default SelectOption;
