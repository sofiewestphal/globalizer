import React from 'react';
import PropTypes from 'prop-types';

const SecondaryButton = (props) => {
  const { id, title, handleClick } = props;
  return(
    <button
      className="secondaryButton"
      id={id}
      type="button"
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

SecondaryButton.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default SecondaryButton;
