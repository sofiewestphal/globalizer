import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import SearchBar from '../../components/SearchBar';
import HeaderImage from '../../components/HeaderImage';
import Explorer from '../../components/Explorer';
import ActivityList from '../../components/ActivityList';
import CTA from '../../components/CTA';
import AppliedFilters from '../../components/AppliedFilters';
import Loading from '../../components/Loading';
import { setCategoryChecked } from '../../actions';

class BrowsingScreen extends React.Component {
  constructor(props) {
    super(props);
    const { activities } = this.props;
    this.state = {
      filteredActivities: activities,
      loaded: false,
      searchValue: '',
      filteredActivitiesSearch: '',
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
    const {
      categories, attendees, activities, when,
    } = this.props;
    if (prevProps.categories !== categories
      || prevProps.activities !== activities
      || prevProps.attendees !== attendees
      || prevProps.when !== when) {
      this.filterActivities();
    }
  }

  filterActivities = () => {
    const { activities } = this.props;

    let filteredActivities = activities;

    filteredActivities = this.filterBasedOnCategories(filteredActivities);
    filteredActivities = this.filterBasedOnWhen(filteredActivities);
    filteredActivities = this.filterBasedOnAttendees(filteredActivities);

    this.setState({
      filteredActivities,
      filteredActivitiesSearch: filteredActivities,
    });
  }

  handleSearch = (searchInput) => {
    const { filteredActivitiesSearch } = this.state;
    let newFilteredActivities;
    if (searchInput === '') {
      newFilteredActivities = filteredActivitiesSearch;
    } else {
      newFilteredActivities = filteredActivitiesSearch.filter(
        activity => activity.title.toLowerCase().includes(searchInput.toLowerCase()),
      );
    }
    this.setState({
      searchValue: searchInput,
      filteredActivities: newFilteredActivities,
    });
  };

  filterBasedOnCategories = (filteredActivities) => {
    const { categories } = this.props;
    const selectedCategories = categories.filter(
      category => category.checked,
    ).map(category => category.id);

    return filteredActivities.filter(
      activity => selectedCategories.indexOf(activity.category) > -1,
    );
  }

  filterBasedOnAttendees = (filteredActivities) => {
    const { attendees } = this.props;
    const filteredOnAttendees = filteredActivities.filter(activity => activity.maxNumberOfAttendees >= attendees.min && activity.maxNumberOfAttendees <= attendees.max);
    return filteredOnAttendees;
  }

  filterBasedOnWhen = (filteredActivities) => {
    console.log('filter based on when');
    const { when } = this.props;
    let dateInc = 0;
    const selectedWhen = when.filter(option => option.checked);

    switch (selectedWhen[0].label) {
      case 'Today':
        dateInc = 0;
        break;
      case 'Tomorrow':
        dateInc = 1;
        break;
      case 'This week':
        dateInc = 6;
        break;
      case 'This month':
        dateInc = 30;
        break;
      default:
        return filteredActivities;
    }

    const limit = new Date().setDate(new Date().getDate() + dateInc);
    const limitISO = new Date(limit).toISOString();

    const newFilteredActivities = filteredActivities.filter((activity) => {
      if (activity.date === '') {
        return true;
      }
      const activityDate = new Date(activity.date).toISOString();
      console.log(activity.title, activityDate, limitISO);
      return activityDate <= limitISO;
    });

    return newFilteredActivities;
  }

  render() {
    const { loaded, searchValue } = this.state;
    const { filteredActivities } = this.state;

    if (!loaded) {
      return (
        <Loading />
      );
    }

    return (
      <div className="container-fluid">
        <HeaderImage />
        <SearchBar
          handleSearch={searchInput => this.handleSearch(searchInput)}
          value={searchValue}
        />
        <div className="row">
          <div className="col-xs-12 col-md-10 col-md-offset-1">
            <h1>Activities for you...</h1>
          </div>
        </div>
        <div className="row">
          <ActivityList
            activitiesArray={filteredActivities}
          />

          <div className="col-xs-12 col-sm-4 col-md-3">
            <AppliedFilters />
            <CTA
              text="Can't find the right activity?"
              secondText="Create your own..."
            />
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
  when: PropTypes.array.isRequired,
  attendees: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  activities: state.activities.activities,
  categories: state.categories.categories,
  when: state.categories.when,
  attendees: state.categories.attendees,
});


const mapDispatchToProps = dispatch => ({
  dispatchSetCategoryChecked: label => dispatch(setCategoryChecked(label)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BrowsingScreen));
