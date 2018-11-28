import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import MainMenu from '../components/MainMenu';
import BrowsingScreen from '../screens/browsingScreen';
import LandingScreen from '../screens/LandingScreen';
import CreateActivityScreen from '../screens/CreateActivityScreen';
import YourActivitiesScreen from '../screens/YourActivitiesScreen';

const Navigation = () => (
  <div className="page">
    <Switch>
      <Route exact path="/" component={LandingScreen} />
      <Route path="/" component={App} />
    </Switch>
    <Redirect to="/" />
  </div>
);

const App = () => (
  <div className="page">
    <MainMenu />
    <Switch>
      <Route path="/browse" component={BrowsingScreen} />
      <Route path="/create" component={CreateActivityScreen} />
      <Route path="/activities" component={YourActivitiesScreen} />
    </Switch>
    <Redirect to="/browse" />
  </div>
);

export default Navigation;
