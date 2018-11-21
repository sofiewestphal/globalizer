import React from 'react';
import { connect } from 'react-redux';

class YourActivitiesScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeScreen: 'attending',
      attendingActivities: [],
      ownedActivities: [],
    };
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12 col md-10 col-md-offset-1">
            <h1>My Activities</h1>

          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  activities: state.activities.activities,
  userId: state.user.id,
});

export default connect(mapStateToProps)(YourActivitiesScreen);
