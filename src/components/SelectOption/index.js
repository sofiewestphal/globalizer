import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const SelectOption = (props) => {
  const {
    labelName, options, handleSelect, currentlySelected, selectingCategory, selectingSeveral,
  } = props;
  const containerClassNames = selectingCategory || selectingSeveral ? 'categoriesContainer selectOptionContainer' : 'selectOptionContainer';

  return (
    <div>
      <h4>{labelName}</h4>
      <div className={containerClassNames}>
        {options.map(option => (
          <label
            className="optionContainer"
            id={option.id}
            key={option.id}
          >
            <p>{option.label}</p>
            <input
              onChange={() => handleSelect(selectingSeveral ? option.label : option.id)}
              type="checkbox"
              checked={selectingCategory ? currentlySelected === option.id : selectingSeveral ? option.checked : currentlySelected}
            />
            <span className="checkmark" />
          </label>
        ))}
      </div>
    </div>
  );
};

SelectOption.propTypes = {
  labelName: PropTypes.string,
  currentlySelected: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
  ]),
  options: PropTypes.array.isRequired,
  selectingCategory: PropTypes.bool,
  selectingSeveral: PropTypes.bool,
  handleSelect: PropTypes.func.isRequired,
};

SelectOption.defaultProps = {
  currentlySelected: false,
  selectingCategory: false,
  selectingSeveral: false,
  labelName: '',
};

export default SelectOption;
