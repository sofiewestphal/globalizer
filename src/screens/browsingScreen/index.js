import React from 'react';
import ActivityCard from '../../components/ActivityCard';

const BrowsingScreen = () => (
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

export default BrowsingScreen;
