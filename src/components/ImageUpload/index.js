import React from 'react';
import './index.scss';
import PropTypes from 'prop-types';

const ImageUpload = (props) => {
  const {
    type, onChange,
  } = props;
  return (
    <div className="imageUploadContainer">
      <input className="btn" name="file" type={type} onChange={onChange} />
    </div>
  );
};

ImageUpload.propTypes = {
  type: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

ImageUpload.defaultProps = {
  type: 'file',
};

export default ImageUpload;
