import React from 'react';
import PropTypes from 'prop-types';
import ActivityCard from './ActivityCard';
import './index.scss';

const ActivityList = (props) => {
  const { activitiesArray } = props;

  return (
    <div className="col-xs-12 col-sm-8 col-md-6 col-md-offset-1">
      {/* move below functions to utils.js, too complicated logic for representational component */}
      {activitiesArray.filter(removePastActivities).sort(compare).map(activity => (
        <ActivityCard
          key={activity.id}
          activity={activity}
        />
      ))}
    </div>
  );
};

// and these as well, they are utility functions and should not be present in components
const removePastActivities = (activity) => {
  const currentDay = new Date().toISOString();
  if(activity.date === '') {
    return true;
  }
  const activityDate = new Date(activity.date);
  const activityDateISO = new Date(activityDate).toISOString();
  return currentDay <= activityDateISO;
};

const compare = (a, b) => {
  if (a.date === '' || a.date < b.date) {
    return -1;
  }
  if (b.date === '' || a.date > b.date) {
    return 1;
  }
  return 0;
};

ActivityList.propTypes = {
  activitiesArray: PropTypes.array.isRequired,
};

export default ActivityList;
