import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import arrowIcon from '../../assets/icons/other_icons/arrow_icon.svg';
import locationIcon from '../../assets/icons/other_icons/location_icon.svg';
import beautyIcon from '../../assets/icons/activity_icons/beauty-and-wellness_icon.svg';
import cultureIcon from '../../assets/icons/activity_icons/culture_icon.svg';
import familyIcon from '../../assets/icons/activity_icons/family_icon.svg';
import foodIcon from '../../assets/icons/activity_icons/food-and-drinks_icon.svg';
import gamesIcon from '../../assets/icons/activity_icons/games_icon.svg';
import hobbiesIcon from '../../assets/icons/activity_icons/hobbies-and-crafts_icon.svg';
import languageIcon from '../../assets/icons/activity_icons/language_icon.svg';
import moviesIcon from '../../assets/icons/activity_icons/movies_icon.svg';
import nightlifeIcon from '../../assets/icons/activity_icons/nightlife_icon.svg';
import outdoorIcon from '../../assets/icons/activity_icons/outdoor_icon.svg';
import sportsIcon from '../../assets/icons/activity_icons/sports_icon.svg';
import SecondaryButton from '../SecondaryButton';
import { toggleAttend } from '../../actions';

const icons = {
  categories_beautyWellness: beautyIcon,
  categories_culture: cultureIcon,
  categories_family: familyIcon,
  categories_foodDrinks: foodIcon,
  categories_games: gamesIcon,
  categories_hobbiesCrafts: hobbiesIcon,
  categories_languages: languageIcon,
  categories_movies: moviesIcon,
  categories_nightlife: nightlifeIcon,
  categories_outdoor: outdoorIcon,
  categories_sports: sportsIcon,
};

class ActivityCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDescription: false,
      btnAttendLabel: '',
      btnAttendDisabled: false,
    };
  }

  componentDidMount = () => {
    this.setAttendingState();
  }

  componentDidUpdate = (prevProps) => {
    const { activity } = this.props;
    if(prevProps.activity !== activity) {
      this.setAttendingState();
    }
  }

  setAttendingState = () => {
    const {
      userId, activity,
    } = this.props;

    let btnAttendLabel;
    let btnAttendDisabled;

    if(userId === activity.owner) {
      btnAttendLabel = 'Your Activity';
      btnAttendDisabled = true;
    } else if(activity.attendees.indexOf(userId) > -1) {
      btnAttendLabel = 'Not Attend';
      btnAttendDisabled = false;
    } else if(activity.attendees.length + 1 === activity.maxNumberOfAttendees) {
      btnAttendLabel = 'It\'s full';
      btnAttendDisabled = true;
    } else {
      btnAttendLabel = 'Attend';
      btnAttendDisabled = false;
    }

    this.setState({
      btnAttendLabel,
      btnAttendDisabled,
    });
  }

  toggleAttend = () => {
    const {
      activity, userId, dispatchToggleAttend,
    } = this.props;

    let newAttendees;

    if(activity.attendees.indexOf(userId) > -1) {
      newAttendees = activity.attendees.filter(attendee => attendee !== userId);
    } else {
      newAttendees = [...activity.attendees, userId];
    }

    const updatedActivity = {
      ...activity,
      attendees: newAttendees,
    };

    dispatchToggleAttend(updatedActivity);
  }

  toggleDesription = () => {
    const { showDescription } = this.state;
    this.setState({
      showDescription: !showDescription,
    });
  }

  renderDateTime = () => {
    const { activity } = this.props;
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const activityDate = activity.date === '' ? 'Anytime' : `${new Date(activity.date).getDate()}. ${months[new Date(activity.date).getMonth()]} ${new Date(activity.date).getFullYear()}`;

    if(activity.startTime !== '' && activity.endTime !== '') {
      return (
        <div className="timeContainer">
          <p>
            {`${activityDate} at ${activity.startTime} to ${activity.endTime}`}
          </p>
        </div>
      );
    }
    if(activity.startTime !== '') {
      return (
        <div className="timeContainer">
          <p>
            {`${activityDate} at ${activity.startTime}`}
          </p>
        </div>
      );
    }
    return <p>{activityDate}</p>;
  }

  render() {
    const { activity } = this.props;
    const { showDescription, btnAttendLabel, btnAttendDisabled } = this.state;

    const currentNumberOfAttendees = activity.attendees.length + 1;
    const containerClassName = showDescription ? 'activityCardContainer showDescription' : 'activityCardContainer';
   

    return (
      <div className="row">
        <div className={containerClassName}>

          <div className="col-xs-10">
            <div className="row flexContainer">

              <div className="col-xs-3">
                <div className="iconContainer">
                  <img src={icons[activity.category]} className="categoryIcon" alt="category icon" />
                </div>
              </div>

              <div className="col-xs-9">
                <div className="textContainer">
                  <div>
                    {this.renderDateTime()}
                    <h3>{activity.title}</h3>
                    <p className="location">
                      <span>
                        <img src={locationIcon} alt="location icon" />
                      </span>
                      {activity.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-xs-9 col-xs-offset-3">
                <div className="activityCardDetails" style={{}}>
                  <p>{activity.description}</p>
                  <div className="attendeesContainer">
                    <p>{`Attendees (${currentNumberOfAttendees}/${activity.maxNumberOfAttendees})`}</p>
                  </div>
                  <div className="attendContainer">
                    <SecondaryButton
                      id="btnToggleAttend"
                      title={btnAttendLabel}
                      disabled={btnAttendDisabled}
                      handleClick={() => {
                        this.toggleAttend();
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xs-2">
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
        </div>
      </div>
    );
  }
}

ActivityCard.propTypes = {
  activity: PropTypes.object.isRequired,
  userId: PropTypes.number.isRequired,
  dispatchToggleAttend: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  userId: state.auth.userId,
});

const mapDispatchToProps = dispatch => ({
  dispatchToggleAttend: updatedActivity => dispatch(toggleAttend(updatedActivity)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ActivityCard);
