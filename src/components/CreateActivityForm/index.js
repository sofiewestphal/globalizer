import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './index.scss';
import InputField from '../InputField';
import MainButton from '../MainButton';
import SelectOption from '../SelectOption';

class CreateActivityForm extends React.Component {
  constructor(props) {
    super(props);
    const { categories } = this.props;
    this.state = {
      activitytitle: '',
      location: '',
      numberOfAttendees: '',
      startTime: '',
      endTime: '',
      date: '',
      description: '',
      category: '',

      setEndTime: false,
      categoryOptions: categories,
    };
  }

  handleInputChange = (name, value) => {
    this.setState({
      [name]: value,
    });
  }

  handleSelect = (category) => {
    this.setState({
      category,
    });
  }

  handleSetEndTime = () => {
    this.setState({
      setEndTime: true,
    });
  }

  handleSubmit = () => {
    const {
      activitytitle, location, description, startTime, endTime,
      date, numberOfAttendees, category,
    } = this.state;

    const { userId } = this.props;

    const activity = {
      category,
      date,
      title: activitytitle,
      location,
      startTime,
      endTime,
      description,
      owner: userId,
      attendees: [],
      maxNumberOfAttendees: numberOfAttendees,
    };

    console.log(activity);
  }

  renderEndTime = () => {
    const { endTime, setEndTime } = this.state;

    if (setEndTime) {
      return (
        <InputField
          labelName="End Time"
          inputName="endTime"
          type="time"
          value={endTime}
          onChange={(inputName, value) => this.handleInputChange(inputName, value)}
        />
      );
    }

    return (
      <div className="endTimeContainer">
        <h4>End Time</h4>
        <button
          className="btnAddEndTime"
          type="button"
          onClick={() => this.handleSetEndTime()}
        >
          + add end time
        </button>
      </div>
    );
  }

  render() {
    const {
      activitytitle, location, numberOfAttendees, description, date,
      startTime, category, categoryOptions,
    } = this.state;

    return (
      <div className="col-xs-12 col-sm-10 col-sm-offset-1">
        <div className="row">
          <form>
            <div className="col-xs-12 col-md-6 col-left">
              <InputField
                labelName="Activity title"
                inputName="activitytitle"
                placeholderText="Give an inspiring title..."
                value={activitytitle}
                onChange={(inputName, value) => this.handleInputChange(inputName, value)}
              />
              <InputField
                labelName="Date"
                inputName="date"
                value={date}
                type="date"
                onChange={(inputName, value) => this.handleInputChange(inputName, value)}
              />

              <div className="timeOptionContainer">
                <InputField
                  labelName="Start Time"
                  inputName="startTime"
                  type="time"
                  value={startTime}
                  onChange={(inputName, value) => this.handleInputChange(inputName, value)}
                />
                {this.renderEndTime()}
              </div>

              <InputField
                labelName="Location"
                inputName="location"
                placeholderText="The location of your activity..."
                value={location}
                onChange={(inputName, value) => this.handleInputChange(inputName, value)}
              />
              <InputField
                labelName="Number of attendees"
                inputName="numberOfAttendees"
                type="number"
                value={numberOfAttendees}
                onChange={(inputName, value) => this.handleInputChange(inputName, value)}
              />
            </div>

            <div className="col-xs-12 col-md-6 col-right">
              <InputField
                labelName="Description"
                inputName="description"
                placeholderText="Make a nice description for the participants..."
                value={description}
                onChange={(inputName, value) => this.handleInputChange(inputName, value)}
              />
              <SelectOption
                labelName="Category"
                title="Select category"
                optionTitle="selectCategory"
                options={categoryOptions}
                currentlySelected={category}
                handleSelect={selectedCategory => this.handleSelect(selectedCategory)}
              />

              <div className="row btnContainer">
                <div className="col-xs-12">
                  <MainButton
                    text="Submit activity"
                    onClick={() => this.handleSubmit()}
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

CreateActivityForm.propTypes = {
  userId: PropTypes.number.isRequired,
  categories: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  categories: state.categories.categories,
  userId: state.user.id,
});

export default connect(mapStateToProps)(CreateActivityForm);
