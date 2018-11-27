import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';
import SelectedFilters from './SelectedFilter';

class AppliedFilters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const {
      selectedTime, minAttendees, maxAttendees, selectedCategory,
    } = this.props;
    return (
      <div className="appliedFiltersContainer">
        <p>Applied filters...</p>
        <div className="row">
          <div className="col-sx-12 filterContainer">
            <p>When</p>
            <SelectedFilters
              text={selectedTime}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-sx-12 filterContainer">
            <p>Attendees</p>
            <SelectedFilters
              text={minAttendees}
            />
            <p>to</p>
            <SelectedFilters
              text={maxAttendees}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-sx-12 filterContainer">
            <p>Categories</p>
            <SelectedFilters
              text={selectedCategory}
            />
          </div>
        </div>
      </div>
    );
  }
}


AppliedFilters.propTypes = {
  selectedTime: PropTypes.string,
  minAttendees: PropTypes.number,
  maxAttendees: PropTypes.number,
  selectedCategory: PropTypes.string,
};

AppliedFilters.defaultProps = {
  selectedTime: 'anytime',
  minAttendees: 2,
  maxAttendees: 30,
  selectedCategory: 'no categories',
};

export default AppliedFilters;
