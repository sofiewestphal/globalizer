import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import AppliedFilters from './AppliedFilters'

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const {
      categories, attendees, when,
    } = this.props;
    const categoriesString = categories
      .filter(category => category.checked)
      .map(category => category.label);
    const whenString = when
      .filter(option => option.checked)
      .map(option => option.label);
    const minAttendees = attendees.min;
    const maxAttendees = attendees.max;

    return <AppliedFilters {...{ categoriesString, whenString, minAttendees, maxAttendees }} />;
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

export default connect(mapStateToProps)(Container);
