import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MainMenu from '../components/MainMenu';
import BrowsingScreen from '../screens/browsingScreen';
import LandingScreen from '../screens/LandingScreen';
import CreateActivityScreen from '../screens/CreateActivityScreen';
import YourActivitiesScreen from '../screens/YourActivitiesScreen';

const Navigation = (props) => {
  const { userId } = props;
  const redirectTo = userId ? '/browse' : '/landing';
  return (
    <div className="page">
      <MainMenu />
      <Route path="/browse" component={BrowsingScreen} />
      <Route path="/create" component={CreateActivityScreen} />
      <Route path="/activities" component={YourActivitiesScreen} />
      <Route path="/landing" component={LandingScreen} />
      <Redirect to={redirectTo} />
    </div>
  );
};

const mapStateToProps = state => ({
  userId: state.user.id,
});

Navigation.propTypes = {
  userId: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Navigation);
