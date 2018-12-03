import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './index.scss';
import SearchBarOption from './SearchBarOption';
import SearchField from './SearchField';
import { setCategoryChecked, setWhenChecked, setAttendeesRange } from '../../actions';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showWhen: false,
      showAttendees: false,
      showCategories: false,
      searchValue: '',
    };
  }

  handleDropdownClick = (optionTitle) => {
    this.setState(prevState => ({
      showWhen: false,
      showAttendees: false,
      showCategories: false,
      [optionTitle]: !prevState[optionTitle],
    }));
  }

  handleWhenSelection = (label) => {
    const { dispatchSetWhenChecked, when } = this.props;
    const newWhen = when.map((option) => {
      if (option.label === label) {
        return { ...option, checked: true };
      }
      return { ...option, checked: false };
    });
    dispatchSetWhenChecked(newWhen);
  }

  handleAttendeesSelection = (key, value) => {
    const { dispatchSetAttendeesRange, attendees } = this.props;
    if (key === 'min') {
      if (value <= attendees.max) {
        const newAttRange = {
          ...attendees,
          [key]: value,
        };
        dispatchSetAttendeesRange(newAttRange);
      }
    } else if (key === 'max') {
      if (value >= attendees.min) {
        const newAttRange = {
          ...attendees,
          [key]: value,
        };
        dispatchSetAttendeesRange(newAttRange);
      }
    }
  }

  handleCategorySelection = (label) => {
    const { dispatchSetCategoryChecked } = this.props;
    dispatchSetCategoryChecked(label);
  }

  render() {
    const {
      showWhen, showAttendees, showCategories,
    } = this.state;

    const {
      categories,
      when,
      handleSearch,
      value,
    } = this.props;

    return (
      <div className="row">
        <div className="col-xs-12 col-md-10 col-md-offset-1">
          <div className="searchbarContainer">
            <div className="row">
              <div className="col-xs-12 col-sm-4">
                <SearchField
                  handleSearch={searchInput => handleSearch(searchInput)}
                  value={value}
                />
              </div>
              <div className="col-xs-12 col-sm-2">
                <SearchBarOption
                  title="When"
                  optionTitle="showWhen"
                  active={showWhen}
                  options={when}
                  handleClick={title => this.handleDropdownClick(title)}
                  handleSelection={label => this.handleWhenSelection(label)}
                />
              </div>
              <div className="col-xs-12 col-sm-3">
                <SearchBarOption
                  title="Attendees"
                  optionTitle="showAttendees"
                  active={showAttendees}
                  handleClick={title => this.handleDropdownClick(title)}
                  handleSelection={
                    (key, rangeValue) => this.handleAttendeesSelection(key, rangeValue)}
                />
              </div>
              <div className="col-xs-12 col-sm-3">
                <SearchBarOption
                  title="Categories"
                  optionTitle="showCategories"
                  active={showCategories}
                  options={categories}
                  handleClick={title => this.handleDropdownClick(title)}
                  handleSelection={label => this.handleCategorySelection(label)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

SearchBar.propTypes = {
  categories: PropTypes.array.isRequired,
  when: PropTypes.array.isRequired,
  attendees: PropTypes.object.isRequired,
  dispatchSetCategoryChecked: PropTypes.func.isRequired,
  dispatchSetWhenChecked: PropTypes.func.isRequired,
  dispatchSetAttendeesRange: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  categories: state.categories.categories,
  when: state.categories.when,
  attendees: state.categories.attendees,
});

const mapDispatchToProps = dispatch => ({
  dispatchSetCategoryChecked: label => dispatch(setCategoryChecked(label)),
  dispatchSetWhenChecked: newWhen => dispatch(setWhenChecked(newWhen)),
  dispatchSetAttendeesRange: newAttRange => dispatch(setAttendeesRange(newAttRange)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
