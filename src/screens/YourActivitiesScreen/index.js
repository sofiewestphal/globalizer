import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ActivityList from '../../components/ActivityList';
import CTA from '../../components/CTA';
import ToggleActivities from '../../components/ToggleActivities';

class YourActivitiesScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeScreen: 'attending',
      attendingActivities: [],
      ownedActivities: [],
    };
  }

  componentDidMount = () => {
    this.filterActivities();
  }

  componentDidUpdate = (prevProps) => {
    const { activities } = this.props;

    if (prevProps.activities !== activities) {
      this.filterActivities();
    }
  }

  filterActivities = () => {
    const { activities, userId } = this.props;

    const attendingActivities = activities.filter(
      activity => activity.attendees.indexOf(userId) > -1 || activity.owner === userId,
    );

    const ownedActivities = activities.filter(
      activity => activity.owner === userId,
    );

    this.setState({
      attendingActivities,
      ownedActivities,
    });
  }

  handleToggle = (toggleTo) => {
    console.log(toggleTo);
    this.setState({
      activeScreen: toggleTo,
    });
  }

  render() {
    const { activeScreen, attendingActivities, ownedActivities } = this.state;
    const activitiesToRender = activeScreen === 'attending' ? attendingActivities : ownedActivities;

    return (
      <div className="container-fluid screenContainer">
        <div className="row">
          <div className="col-xs-12 col md-10 col-md-offset-1">
            <h1>My Activities</h1>
          </div>
        </div>
        <ToggleActivities
          activeToggleButton={activeScreen}
          handleToggle={toggleTo => this.handleToggle(toggleTo)}
        />
        <div className="row">
          <ActivityList
            activitiesArray={activitiesToRender}
          />

          <div className="col-xs-12 col-sm-4 col-md-3">
            <CTA
              text="Be the most awesome person and create a cool activity!"
            />
          </div>
        </div>
      </div>
    );
  }
}

YourActivitiesScreen.propTypes = {
  activities: PropTypes.array.isRequired,
  userId: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  activities: state.activities.activities,
  userId: state.auth.userId,
});

export default connect(mapStateToProps)(YourActivitiesScreen);
