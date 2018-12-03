import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const MainButton = (props) => {
  const {
    text,
    disabled,
    onClick,
  } = props;

  const btnClassName = disabled ? 'mainBtn disabled' : 'mainBtn';
  return (
    <button
      className={btnClassName}
      disabled={disabled}
      type="button"
      onClick={onClick}
    >
      <p>{text}</p>
    </button>
  );
};

MainButton.propTypes = {
  text: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

MainButton.defaultProps = {
  disabled: false,
};

export default MainButton;
