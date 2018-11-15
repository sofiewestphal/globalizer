import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import MainMenu from '../components/MainMenu';
import ActivityCard from '../components/ActivityCard';

const BrowsingPage = () => (
  <div>
    <h1>Find Activities</h1>
    <ActivityCard
      category="outdoor"
      date="15. November 2018"
      title="Malene's Birthday"
      location="LA Bar"
      description="holahola"
      currentNumberOfAttendees={3}
      MaxNumberOfAttendees={10}
    />
  </div>
);

const CreateActivitiesPage = () => (
  <div>
    <h1>Create Activity</h1>
  </div>
);

const YourActivitiesPage = () => (
  <div>
    <h1>Your Activities</h1>
  </div>
);

const Navigation = () => (
  <div className="page">
    <MainMenu />
    <Route path="/browse" component={BrowsingPage} />
    <Route path="/create" component={CreateActivitiesPage} />
    <Route path="/activities" component={YourActivitiesPage} />
    <Redirect to="/browse" />
  </div>
);

export default Navigation;
