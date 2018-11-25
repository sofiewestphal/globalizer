import React from 'react';
import PropTypes from 'prop-types';
import ActivityCard from './ActivityCard';
import './index.scss';

const ActivityList = ({ activitiesArray }) => (
  <div className="col-xs-12 col-sm-8 col-md-6 col-md-offset-1">
    {activitiesArray.map(activity => (
      <ActivityCard
        key={activity.title}
        category={activity.category}
        date={activity.date}
        title={activity.title}
        location={activity.location}
        description={activity.description}
        owner={activity.owner}
        attendees={activity.attendees}
        maxNumberOfAttendees={activity.maxNumberOfAttendees}
      />
    ))}
  </div>
);

ActivityList.propTypes = {
  activitiesArray: PropTypes.array.isRequired,
};

export default ActivityList;
