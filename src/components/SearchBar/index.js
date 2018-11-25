import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './index.scss';
import SearchBarOption from './SearchBarOption';
import { setCategoryChecked } from '../../actions';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showWhen: false,
      showAttendees: false,
      showCategories: false,
      whenOptions: [
        { label: 'Any time', id: 'when_anytime', checked: true },
        { label: 'Today', id: 'when_today', checked: false },
        { label: 'Tomorrow', id: 'when_tomorrow', checked: false },
        { label: 'This week', id: 'when_thisWeek', checked: false },
        { label: 'This month', id: 'when_thisMonth', checked: false },
      ],
    };
  }

  handleDropdownClick = (optionTitle) => {
    // const newTitleState = !this.state[optionTitle];

    this.setState(prevState => ({
      showWhen: false,
      showAttendees: false,
      showCategories: false,
      [optionTitle]: !prevState[optionTitle],
    }));

    // this.setState({
    //   showWhen: false,
    //   showAttendees: false,
    //   showCategories: false,
    //   [optionTitle]: newTitleState,
    // });
  }

  handleWhenSelection = (label) => {
    console.log(label);
  }

  handleAttendeesSelection = (label) => {
    console.log(label);
  }

  handleCategorySelection = (label) => {
    console.log(label);
    const { dispatchSetCategoryChecked } = this.props;
    dispatchSetCategoryChecked(label);
  }

  render() {
    const {
      showWhen, showAttendees, showCategories, whenOptions,
    } = this.state;

    const { categories } = this.props;

    return (
      <div className="row">
        <div className="col-xs-12 col-sm-10 col-sm-offset-1">
          <div className="searchbarContainer">
            <div className="row">
              <div className="col-xs-12 col-sm-4">
                <input id="searchInput" placeholder="Search activities..." />
              </div>
              <div className="col-xs-12 col-sm-2">
                <SearchBarOption
                  title="When"
                  optionTitle="showWhen"
                  active={showWhen}
                  options={whenOptions}
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
                  handleSelection={label => this.handleAttendeesSelection(label)}
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
  dispatchSetCategoryChecked: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  categories: state.categories.categories,
});

const mapDispatchToProps = dispatch => ({
  dispatchSetCategoryChecked: label => dispatch(setCategoryChecked(label)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
