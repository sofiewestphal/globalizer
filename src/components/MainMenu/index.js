/**
 * Core
 */
import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.scss';
/**
 * Components
 */
import ProfileDropdown from './ProfileDropdown';
/**
 * icons
 */
import logoGlobalizer from '../../assets/icons/other_icons/logo_globalizer.svg';

/* END OF IMPORTS */

/**
 * @Component - returns main menu
 */
class MainMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDropdown: false,
    };
  }

  toggleDropdown = () => {
    const { showDropdown } = this.state;
    this.setState({
      showDropdown: !showDropdown,
    });
  }

  render() {
    const { showDropdown } = this.state;
    const containerClassName = showDropdown ? 'profileDropdownContainer showDropdown' : 'profileDropdownContainer';
    return (
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
            onClick={() => this.toggleDropdown()}
          />
          <div className={containerClassName}>
            <ProfileDropdown />
          </div>
        </div>
      </nav>
    );
  }
}


export default MainMenu;
