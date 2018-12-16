import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

const ImageUpload = (props) => {
  const {
    type, inputName, value, onChange,
  } = props;
  return (
    <div className="imageUploadContainer">
      <input
        className="imageUpload"
        name={inputName}
        value={value}
        type={type}
        onChange={() => onChange(inputName, event.target.value)}
      />
    </div>
  );
};

ImageUpload.propTypes = {
  type: PropTypes.string,
  inputName: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

ImageUpload.defaultProps = {
  type: 'file',
};

export default ImageUpload;
