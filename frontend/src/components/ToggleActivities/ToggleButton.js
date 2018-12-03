import React from 'react';
import PropTypes from 'prop-types';

const ToggleButton = (props) => {
  const {
    active, label, toggleTo, handleToggle,
  } = props;
  const buttonClasses = active ? 'toggleButton active' : 'toggleButton';

  return (
    <button
      className={buttonClasses}
      type="button"
      onClick={() => handleToggle(toggleTo)}
    >
      <p>{label}</p>
    </button>
  );
};

ToggleButton.propTypes = {
  active: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  toggleTo: PropTypes.string.isRequired,
  handleToggle: PropTypes.func.isRequired,
};

export default ToggleButton;
