import React from 'react';
import ActivityCard from '../../components/ActivityCard';
import SearchBar from '../../components/SearchBar';

const BrowsingScreen = () => (
  <div className="container-fluid">
    <SearchBar />
    <div className="row">
      <div className="col-xs-12 col-sm-8 col-md-6 col-md-offset-1">
        <h1>Activities for you...</h1>
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

      <div className="col-xs-12 col-sm-4 col-md-3">
        <p>Applied filters</p>
        <h2>Can't find the right activity?<br/>Create your own...</h2>
        <button>Create Activity</button>
      </div>

    </div>
  </div>
);

export default BrowsingScreen;
