import React from 'react';
import ActivityCard from '../../components/ActivityCard';
import SearchBar from '../../components/SearchBar';
import HeaderImage from '../../components/HeaderImage';
import Explorer from '../../components/Explorer';

const BrowsingScreen = () => (
  <div className="container-fluid">
    <HeaderImage />
    <SearchBar />
    <div className="row">
      <div className="col-xs-12 col-md-10 col-md-offset-1">
        <h1>Activities for you...</h1>
      </div>
    </div>
    <div className="row">
      <div className="col-xs-12 col-sm-8 col-md-6 col-md-offset-1">
        <ActivityCard
          category="nightlife"
          date="15. November 2018"
          title="Malene's Birthday"
          location="LA Bar"
          description="Kom på LA Bar og vær med til at fejre min fødselsdag. Vi starter med snørrebåndsleg, stopdans og dans med appelsiner. Senere er der fri dans. Der er fri bar den første time."
          currentNumberOfAttendees={3}
          MaxNumberOfAttendees={10}
        />

        <ActivityCard
          category="outdoor"
          date="22. November 2018"
          title="Climbing"
          location="Nørrebrohallen"
          description="We are going climbing at Nørrebro's Klatreklub. It costs 50 krones for the entrance and then you can find old climbing shoes there in case you don't have your own shoes."
          currentNumberOfAttendees={3}
          MaxNumberOfAttendees={10}
        />
      </div>

      <div className="col-xs-12 col-sm-4 col-md-3">
        <p>Applied filters</p>
        <h3>Can't find the right activity?<br />Create your own...</h3>
        <button>Create Activity</button>
      </div>

    </div>
    <Explorer />
  </div>
);

export default BrowsingScreen;
