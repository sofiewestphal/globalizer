import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const BrowsingPage = () => (
  <div>
    <h1>Find Activities</h1>
  </div>
);

const YourActivitiesPage = () => (
  <div>
    <h1>Your Activities</h1>
  </div>
);

const Navigation = () => (
  <div className="page">
    <Route path="/browse" component={BrowsingPage} />
    <Route path="/activities" component={YourActivitiesPage} />
    <Redirect to="/browse" />
  </div>
);

export default Navigation;
