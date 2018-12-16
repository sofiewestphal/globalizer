// very nice of you that you still use my comment system :)
// but I find it silly now, just seperate 3rd parties from locals with one emtpy line

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { toggleAttend } from '../../actions';
import SecondaryButton from '../SecondaryButton';
import arrowIcon from '../../assets/icons/other_icons/arrow_icon.svg';
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
import { Marker } from '../../assets/icons/icons';

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
  // I think you do something like this now
  state = {
    showDescription: false,
    btnAttendLabel: '',
    btnAttendDisabled: false,
  }

  componentDidMount = () => {
    this.setAttendingState();
  }

  componentDidUpdate = (prevProps) => {
    const { activity } = this.props;
    if (prevProps.activity !== activity) {
      this.setAttendingState();
    }
  }

  setAttendingState = () => {
    const {
      userId, activity,
    } = this.props;

    // I would do that differently
    const isOwner = userId === activity.owner;
    const blahBlah = activity.attendees.indexOf(userId) > -1;
    const isFull = activity.attendees.length + 1 === activity.maxNumberOfAttendees;

    // don't mind my function namings, come up with something better and more descriptive
    const setStateWithLabelAndStatus = (btnAttendLabel, btnAttendDisabled) => this.setState({ btnAttendLabel, btnAttendDisabled });

    if (isOwner) {
      return setStateWithLabelAndStatus('Your Activity', true );
    } else if (blahBlah) {
      return setStateWithLabelAndStatus('Not Attend', false );
    } else if (isFull) {
      return setStateWithLabelAndStatus('It\'s full', true );
    }
    return setStateWithLabelAndStatus('Attend', false );    
  }

  toggleAttend = () => {
    const {
      activity, userId, dispatchToggleAttend,
    } = this.props;

    const someCondition = activity.attendees.indexOf(userId) > -1;

    dispatchToggleAttend({
      ...activity,
      attendees: someCondition
        ? activity.attendees.filter(attendee => attendee !== userId)
        : [...activity.attendees, userId]
    });
  }

  toggleDesription = () => {
    // if you destructure just one item, then it's not really neccesary
    this.setState({
      showDescription: !this.state.showDescription,
    });
  }

  renderDateTime = () => {
    // creating methods that return JSX is considered bad
    // it becomes harder to work with those later on
    // just consider turning those into components and passing props
    const { activity } = this.props;
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const activityDate = activity.date === '' ? 'Anytime' : `${new Date(activity.date).getDate()}. ${months[new Date(activity.date).getMonth()]} ${new Date(activity.date).getFullYear()}`;

    if (activity.startTime !== '' && activity.endTime !== '') {
      return (
        <div className="timeContainer">
          <p>
            {`${activityDate}, ${activity.startTime} - ${activity.endTime}`}
          </p>
        </div>
      );
    }
    if (activity.startTime !== '') {
      return (
        <div className="timeContainer">
          <p>
            {`${activityDate}, ${activity.startTime}`}
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
                        <Marker
                          width="8px"
                          height="10px"
                          strokeColour="#242424"
                          iconClassName="marker"
                        />
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
                      // ok this I learned at Catawiki
                      // what happens with this way of passing function to handler is
                      // that this function created over and over again on every rerender
                      // so do this instead
                      handleClick={this.toggleAttend}
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

// ok another this that should never be done is
// components themselves should not be connected to redux store
// only containers
// so I would create another folder containers, next to components and
// put all state managemenr there, and then return pure representational components
// or use feature pattern
// read more on this here: https://medium.freecodecamp.org/feature-u-cf3277b11318
export default connect(mapStateToProps, mapDispatchToProps)(ActivityCard);
