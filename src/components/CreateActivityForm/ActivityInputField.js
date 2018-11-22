import React from 'react';
import './index.scss';
import PropTypes from 'prop-types';

const ActivityInputField = (props) => {
  const {
    labelName, inputName, value, type, placeholderText, onChange,
  } = props;
  let inputClassNames = 'input';
  if (inputName === 'description') {
    inputClassNames += ' description';
  }
  const selectingAttendees = inputName === 'numberOfAttendees';

  return (
    <div className="inputContainer">
      <label className="label">
        <h4>{labelName}</h4>
        {selectingAttendees ? (
          <input
            className={inputClassNames}
            name={inputName}
            value={value}
            type={type}
            onChange={() => onChange(inputName, event.target.value)}
            min={2}
            max={30}
          />
        ) : (
          <input
            className={inputClassNames}
            name={inputName}
            value={value}
            type={type}
            placeholder={placeholderText}
            onChange={() => onChange(inputName, event.target.value)}
          />
        )}
      </label>
    </div>
  );
};

ActivityInputField.propTypes = {
  labelName: PropTypes.string.isRequired,
  inputName: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholderText: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
};

ActivityInputField.defaultProps = {
  type: 'text',
  placeholderText: '',
};

export default ActivityInputField;
