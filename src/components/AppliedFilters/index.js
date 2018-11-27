import React from 'react';
import { connect } from 'react-redux';
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
      categories, minAttendees, maxAttendees, when,
    } = this.props;

    const categoriesString = categories.filter(category => category.checked)
      .map(category => category.label);

    const whenString = when.filter(option => option.checked)
      .map(option => option.label);

    return (
      <div className="appliedFiltersContainer">
        <p>Applied filters...</p>
        <div className="row">
          <div className="col-sx-12 filterContainer">
            <p>When</p>
            <SelectedFilters
              text={whenString}
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
              text={categoriesString}
            />
          </div>
        </div>
      </div>
    );
  }
}


AppliedFilters.propTypes = {
  minAttendees: PropTypes.number,
  maxAttendees: PropTypes.number,
  when: PropTypes.array.isRequired,
  categories: PropTypes.array.isRequired,
};

AppliedFilters.defaultProps = {
  minAttendees: 2,
  maxAttendees: 30,
};

const mapStateToProps = state => ({
  categories: state.categories.categories,
  when: state.categories.when,
})
export default connect(mapStateToProps)(AppliedFilters);
