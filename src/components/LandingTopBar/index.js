import { NavLink } from 'react-router-dom';
import React from 'react';
import './index.scss';

const LandingTopBar = () => (
  <nav className="topBarContainer">
    <NavLink to="/browse" activeClassName="activeNavLink">
      <p>Globalizer</p>
    </NavLink>

    <div className="rightAlignedNav">
      <NavLink to="/create" activeClassName="activeNavLink">
        <p>Sign up</p>
      </NavLink>

      <NavLink to="/activities" activeClassName="activeNavLink">
        <p>Log in</p>
      </NavLink>
    </div>
  </nav>
);

export default LandingTopBar;
