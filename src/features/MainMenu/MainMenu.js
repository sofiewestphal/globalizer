import React from 'react';
import { NavLink } from 'react-router-dom';

import './index.scss';
import ProfileDropdown from './ProfileDropdown';
import logoGlobalizer from '../../assets/icons/other_icons/logo_globalizer.svg';

const MainMenu = ({ showDropdown }) => (
  <nav className="navContainer">
    <NavLink to="/browse" activeClassName="activeNavLink">
      <img src={logoGlobalizer} alt="logo" width="120px" className="logo" />
    </NavLink>
    <div className="rightAlignedNav">
      <NavLink to="/create" activeClassName="activeNavLink">
        <p>Create Activity</p>
      </NavLink>
      <NavLink to="/activities" activeClassName="activeNavLink">
        <p>My Activities</p>
      </NavLink>
      <button
        type="button"
        className="userProfile"
        // this is a good example how to pass onClick handlers to presentational components
        onClick={onClick}
      />
      <div
        // fomating like this helps readability
        className={
          showDropdown
          ? 'profileDropdownContainer showDropdown'
          : 'profileDropdownContainer'
        }
      >
        <ProfileDropdown />
      </div>
    </div>
  </nav>
);

export default MainMenu;
