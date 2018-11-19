import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';
import arrowIcon from '../../assets/icons/other_icons/arrow_icon.svg';
import outdoorIcon from '../../assets/icons/activity_icons/outdoor_icon.svg';

const icons = {
  outdoor: outdoorIcon,
};

class ActivityCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDescription: false,
    };
  }

  toggleDesription = () => {
    const { showDescription } = this.state;
    this.setState({
      showDescription: !showDescription,
    });
  }

  render() {
    const {
      category, date, title, location, description, currentNumberOfAttendees, MaxNumberOfAttendees,
    } = this.props;

    const { showDescription } = this.state;

    return (
      <div className="activityCardContainer">
        <div className="iconContainer">
          <img src={icons[category]} className="App-logo" alt="logo" />
        </div>
        <div className="textContainer">
          <div>
            <p>{date}</p>
            <h3>{title}</h3>
            <p>{location}</p>
          </div>
          {showDescription && (
          <div className="activityCardDetails" style={{}}>
            <p>{description}</p>
            <div className="attendeesContainer">
              <p>{`Attendees (${currentNumberOfAttendees}/${MaxNumberOfAttendees})`}</p>
            </div>
            <div className="attendContainer">
              <button
                className="btnToggleAttend"
                type="button"
              >
                Attend
              </button>
            </div>
          </div>
          )}
        </div>
        <div className="toggleContainer">
          <button
            className="btnTtoggleActivityCard"
            type="button"
            onClick={() => this.toggleDesription()}
          >
            <img src={arrowIcon} alt="toggle activity card" />
          </button>
        </div>
      </div>
    );
  }
}

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
