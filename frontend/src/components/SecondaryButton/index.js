import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const SecondaryButton = (props) => {
  const {
    id, title, disabled, handleClick,
  } = props;
  const btnClassNames = disabled ? 'secondaryButton disabled' : 'secondaryButton';
  return(
    <button
      className={btnClassNames}
      id={id}
      type="button"
      disabled={disabled}
      onClick={() => handleClick()}
    >
      <p>
        {title}
      </p>
    </button>
  );
};

SecondaryButton.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  handleClick: PropTypes.func.isRequired,
};

SecondaryButton.defaultProps = {
  disabled: false,
};

export default SecondaryButton;
