import React from 'react';
import PropTypes from 'prop-types';
import ActivityCard from './ActivityCard';
import './index.scss';

const ActivityList = (props) => {
  const { activitiesArray } = props;

  return (
    <div className="col-xs-12 col-sm-8 col-md-6 col-md-offset-1">
      {activitiesArray.filter(removePastActivities).sort(compare).map(activity => (
        <ActivityCard
          key={activity.id}
          activity={activity}
        />
      ))}
    </div>
  );
};

const removePastActivities = (activity) => {
  const currentDay = new Date().toLocaleDateString();
  const activityDate = new Date(activity.date).toLocaleDateString();
  return currentDay <= activityDate;
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
