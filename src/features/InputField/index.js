import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

const InputField = ({
    labelName,
    inputName,
    value,
    type,
    placeholderText,
    onChange,
    disabled,
    required,
  }) => {
  // this looks weird
  // what are you trying to do here?
  let inputClassNames = 'input';
  if (inputName === 'description') {
    inputClassNames += ' description';
  } if (disabled) {
    inputClassNames += ' disabled';
  }

  const labelClassName = type === 'text' || 'password' ? 'label' : 'label fitContent';

  return (
    <div className="inputContainer">
      <label
        className={labelClassName}
        htmlFor={inputName}
        id={inputName}
      >
        <h4>{labelName}</h4>
        <input
          className={inputClassNames}
          id={inputName}
          name={inputName}
          value={value}
          placeholder={placeholderText}
          type={type}
          disabled={disabled}
          required={required}
          onChange={event => onChange(inputName, event.target.value)}
          min={2}
          max={30}
        />
      </label>
    </div>
  );
};

InputField.propTypes = {
  labelName: PropTypes.string.isRequired,
  inputName: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  placeholderText: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
};

InputField.defaultProps = {
  type: 'text',
  placeholderText: '',
  disabled: false,
  required: false,
};

export default InputField;
