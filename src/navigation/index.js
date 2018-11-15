import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import MainMenu from '../components/MainMenu';
import BrowsingScreen from '../screens/browsingScreen';
import CreateActivityScreen from '../screens/CreateActivityScreen';
import YourActivitiesScreen from '../screens/YourActivitiesScreen';

const Navigation = () => (
  <div className="page">
    <MainMenu />
    <Route path="/browse" component={BrowsingScreen} />
    <Route path="/create" component={CreateActivityScreen} />
    <Route path="/activities" component={YourActivitiesScreen} />
    <Redirect to="/browse" />
  </div>
);

export default Navigation;
