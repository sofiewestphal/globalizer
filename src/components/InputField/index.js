import React from 'react';
import './index.scss';
import PropTypes from 'prop-types';

const InputField = (props) => {
  const {
    labelName, inputName, value, type, placeholderText,
    onChange, disabled, required,
  } = props;

  let inputClassNames = 'input';
  if(inputName === 'description') {
    inputClassNames += ' description';
  } if (disabled) {
    inputClassNames += ' disabled';
  }

  const labelClassName = type === 'text' ? 'label' : 'label fitContent';
  const selectingAttendees = inputName === 'numberOfAttendees';

  return (
    <div className="inputContainer">
      <label className={labelClassName}>
        <h4>{labelName}</h4>
        {selectingAttendees ? (
          <input
            className={inputClassNames}
            name={inputName}
            value={value}
            type={type}
            required={required}
            onChange={() => onChange(inputName, event.target.value)}
            min={2}
            max={30}
          />
        ) : (
          <input
            className={inputClassNames}
            name={inputName}
            value={value}
            disabled={disabled}
            type={type}
            placeholder={placeholderText}
            required={required}
            onChange={() => onChange(inputName, event.target.value)}
          />
        )}
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
