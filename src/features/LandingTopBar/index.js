import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';


const LandingTopBar = ({ handleClick }) => (
  <nav className="topBarContainer">
    <button
      type="button"
      onClick={() => handleClick('showPopup')}
    >
      <p>Sign up</p>
    </button>

    <button
      type="button"
      onClick={() => handleClick('showLogin')}
    >
      <p>Log in</p>
    </button>
  </nav>
);

LandingTopBar.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default LandingTopBar;
