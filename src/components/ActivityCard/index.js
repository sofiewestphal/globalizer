import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';
import editIcon from '../../assets/Images/other_icons/edit_icon.svg';
import outdoorIcon from '../../assets/Images/activity_icons/outdoor_icon.svg';

const icons = {
  outdoor: outdoorIcon,
};

const ActivityCard = (props) => {
  const {
    category, date, title, location, description, currentNumberOfAttendees, MaxNumberOfAttendees,
  } = props;
  return (
    <div className="activityCardContainer">
      <div className="iconContainer">
        <img src={icons[category]} className="App-logo" alt="logo" />
      </div>
      <div className="textContainer">
        <div>
          <p>{date}</p>
          <h2>{title}</h2>
          <p>{location}</p>
        </div>
        <div className="activityCardDetails">
          <p>{description}</p>
          <div className="attendeesContainer">
            <p>{`Attendees (${currentNumberOfAttendees}/${MaxNumberOfAttendees})`}</p>
          </div>
          <button type="button">Attend</button>
        </div>
      </div>
      <div className="toggleContainer">
        <img src={editIcon} className="toggleActivityCard" alt="toggle activity card" />
      </div>
    </div>
  );
};

ActivityCard.propTypes = {
  category: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  currentNumberOfAttendees: PropTypes.number.isRequired,
  MaxNumberOfAttendees: PropTypes.number.isRequired,
};

export default ActivityCard;
