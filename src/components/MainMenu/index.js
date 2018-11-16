import { NavLink } from 'react-router-dom';
import React from 'react';
import './index.scss';

const MainMenu = () => (
  <nav className="navContainer">
    <NavLink to="/browse" activeClassName="activeNavLink">
      <p>Globalizer</p>
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
