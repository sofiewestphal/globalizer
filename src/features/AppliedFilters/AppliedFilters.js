import React from 'react';

import './index.scss';
import SelectedFilters from './SelectedFilter';

const AppliedFilters = ({
  categoriesString,
  whenString,
  minAttendees,
  maxAttendees
}) => (
  <div className="appliedFiltersContainer">
    <p>Applied filters...</p>
    <div className="row">
      <div className="col-sx-12 filterContainer">
        <p>When</p>
        <SelectedFilters
          text={whenString}
        />
      </div>
    </div>
    <div className="row">
      <div className="col-sx-12 filterContainer">
        <p>Attendees</p>
        <SelectedFilters
          text={minAttendees}
        />
        <p>to</p>
        <SelectedFilters
          text={maxAttendees}
        />
      </div>
    </div>
    <div className="row">
      <div className="col-sx-12 filterContainer">
        <p>Categories</p>
        <SelectedFilters
          text={categoriesString}
        />
      </div>
    </div>
  </div>
);

export default AppliedFilters;