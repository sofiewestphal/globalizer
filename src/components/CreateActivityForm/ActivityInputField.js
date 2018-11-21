import React from 'react';
import './index.scss';
import PropTypes from 'prop-types';

const ActivityInputField = (props) => {
  const { labelName, inputName, placeholderText } = props;
  let inputClassNames = 'input';
  if (inputName === 'description') {
    inputClassNames += ' description';
  }
  return (
    <div className="row inputContainer">
      <div className="col-xs-12">
        <label className="label">
          {labelName}
          <input
            className={inputClassNames}
            name={inputName}
            placeholder={placeholderText}
            type="string"
          />
        </label>
      </div>
    </div>
  );
};

ActivityInputField.propTypes = {
  labelName: PropTypes.string.isRequired,
  inputName: PropTypes.string.isRequired,
  placeholderText: PropTypes.string.isRequired,
};

export default ActivityInputField;
