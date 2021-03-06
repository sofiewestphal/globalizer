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
      categories, attendees, when,
    } = this.props;

    const categoriesString = categories.filter(category => category.checked)
      .map(category => category.label);

    const whenString = when.filter(option => option.checked)
      .map(option => option.label);

    const minAttendees = attendees.min;

    const maxAttendees = attendees.max;

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
  when: PropTypes.array.isRequired,
  categories: PropTypes.array.isRequired,
  attendees: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  categories: state.categories.categories,
  attendees: state.categories.attendees,
  when: state.categories.when,
});

export default connect(mapStateToProps)(AppliedFilters);
