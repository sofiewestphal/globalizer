import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ActivityCard from '../../components/ActivityCard';
import SearchBar from '../../components/SearchBar';
import HeaderImage from '../../components/HeaderImage';
import Explorer from '../../components/Explorer';
import { setCategoryChecked } from '../../actions';

class BrowsingScreen extends React.Component {
  constructor(props) {
    super(props);
    const { activities } = this.props;
    this.state = {
      filteredActivities: activities,
      loaded: false,
    };
  }

  componentDidMount = () => {
    //  // move this to confirm selected categories
    // const { categories, initialSelectedCategories, dispatchSetCategoryChecked } = this.props;

    // categories.forEach((category) => {
    //   if(initialSelectedCategories.indexOf(category.label) > -1) {
    //     dispatchSetCategoryChecked(category.label);
    //   }
    // });

    this.filterActivities();

    this.setState({
      loaded: true,
    });
  };

  componentDidUpdate = (prevProps) => {
    const { categories } = this.props;
    if(prevProps.categories !== categories) {
      this.filterActivities();
    }
  }

  filterActivities = () => {
    const { activities, categories } = this.props;
    const selectedCategories = categories.filter(
      category => category.checked,
    ).map(category => category.id);
    const filteredActivities = activities.filter(
      activity => selectedCategories.indexOf(activity.category) > -1,
    );

    console.log(filteredActivities);

    this.setState({
      filteredActivities,
    });
  }

  render() {
    const { loaded } = this.state;
    const { filteredActivities } = this.state;

    if(!loaded) {
      return (
        <h1>Loading</h1>
      );
    }

    return (
      <div className="container-fluid">
        <HeaderImage />
        <SearchBar />
        <div className="row">
          <div className="col-xs-12 col-md-10 col-md-offset-1">
            <h1>Activities for you...</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-8 col-md-6 col-md-offset-1">
            {filteredActivities.map(activity => (
              <ActivityCard
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

          <div className="col-xs-12 col-sm-4 col-md-3">
            <p>Applied filters</p>
            <h3>
              Can't find the right activity?<br/>Create your own...
            </h3>
            <button
              type="button"
            >
              Create Activity
            </button>
          </div>

        </div>
        <Explorer />
      </div>
    );
  }
}

BrowsingScreen.propTypes = {
  activities: PropTypes.array.isRequired,
  categories: PropTypes.array.isRequired,
  initialSelectedCategories: PropTypes.array.isRequired,
  dispatchSetCategoryChecked: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  activities: state.activities.activities,
  categories: state.categories.categories,
  initialSelectedCategories: state.user.categories,
});


const mapDispatchToProps = dispatch => ({
  dispatchSetCategoryChecked: label => dispatch(setCategoryChecked(label)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BrowsingScreen);
