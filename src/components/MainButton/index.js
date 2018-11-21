import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const MainButton = (props) => {
  const {
    text,
    onClick,
  } = props;
  return (
    <button
      className="mainBtn"
      type="button"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

MainButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default MainButton;
