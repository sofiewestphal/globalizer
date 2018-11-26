import { NavLink } from 'react-router-dom';
import React from 'react';
import './index.scss';
import logoGlobalizer from '../../assets/icons/other_icons/logo_globalizer.svg';

const MainMenu = () => (
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
    </div>
  </nav>
);

export default MainMenu;
