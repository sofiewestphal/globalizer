import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import './index.scss';
import InputField from '../InputField';
import MainButton from '../MainButton';
import SelectOption from '../SelectOption';
import { Close } from '../../assets/icons/icons';
import { addActivity } from '../../actions';

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
      setDateTime: true,
      categoryOptions: categories,
      selectDateTimeOptions: [{ id: 'dateTimeSelector', label: 'Date and time is not important' }],
      navigate: false,
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

  toggleDateTime = () => {
    const { setDateTime } = this.state;
    this.setState({
      setDateTime: !setDateTime,
    });
  }

  handleSetEndTime = () => {
    const { setEndTime } = this.state;
    this.setState({
      setEndTime: !setEndTime,
    });
  }

  handleSubmit = () => {
    const {
      activitytitle, location, description, startTime, endTime,
      date, numberOfAttendees, category,
    } = this.state;

    const {
      userId,
      // dispatchAddActivity,
    } = this.props;

    const activity = {
      id: `${Date.now()}_${userId}`,
      category,
      date,
      title: activitytitle,
      location,
      startTime,
      endTime,
      description,
      owner: userId,
      attendees: [],
      maxNumberOfAttendees: Number(numberOfAttendees),
    };

    // dispatchAddActivity(activity);

    try{
      fetch("https://radiant-depths-55581.herokuapp.com/api/activities", {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ activity }),
      });
    } catch(e) {
      console.log('oops user not saved');
    }

    this.setState({
      navigate: true,
    });
  }

  renderEndTime = () => {
    const { endTime, setEndTime, setDateTime } = this.state;
    const btnAddEndTimeClassName = setDateTime ? 'btnAddEndTime' : 'btnAddEndTime disabled';
    const handleClick = setDateTime ? () => this.handleSetEndTime() : () => { };


    if (setEndTime) {
      return (
        <div className="setEndTimeContainer">
          <InputField
            labelName="End Time"
            inputName="endTime"
            type="time"
            disabled={!setDateTime}
            value={endTime}
            onChange={(inputName, value) => this.handleInputChange(inputName, value)}
          />
          <Close
            width="40px"
            height="70px"
            strokeColour="#242424"
            iconClassName="closeSetEndTime"
            handleClick={() => this.handleSetEndTime()}
          />
        </div>
      );
    }

    return (
      <div className="endTimeContainer">
        <h4>End Time</h4>
        <button
          className={btnAddEndTimeClassName}
          type="button"
          onClick={handleClick}
        >
          + add end time
        </button>
      </div>
    );
  }

  render() {
    const {
      activitytitle, location, numberOfAttendees, description, date,
      startTime, category, categoryOptions, selectDateTimeOptions, setDateTime, navigate,
    } = this.state;

    const submit = activitytitle !== '' && location !== '' && description !== ''
      && numberOfAttendees !== '' && category !== '';

    if (navigate === true) {
      return <Redirect to="/activities" />;
    }

    return (
      <div className="col-xs-12 col-sm-10 col-sm-offset-1">
        <div className="row">
          <form>
            <div className="col-xs-12 col-md-6 col-left">
              <div className="row">
                <div className="col-xs-12">
                  <InputField
                    labelName="Activity title *"
                    inputName="activitytitle"
                    placeholderText="Give an inspiring title..."
                    required
                    value={activitytitle}
                    onChange={(inputName, value) => this.handleInputChange(inputName, value)}
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-xs-12 col-sm-6 dateContainer">
                  <InputField
                    labelName="Date"
                    inputName="date"
                    disabled={!setDateTime}
                    value={date}
                    type="date"
                    onChange={(inputName, value) => this.handleInputChange(inputName, value)}
                  />
                </div>
                <div className="col-xs-12 col-sm-6 dateContainer">
                  <SelectOption
                    options={selectDateTimeOptions}
                    currentlySelected={!setDateTime}
                    handleSelect={() => this.toggleDateTime()}
                  />
                </div>
              </div>

              <div className="row timeContainer">
                <div className="col-xs-12 col-sm-6 timeOptionContainer">
                  <InputField
                    labelName="Start Time"
                    inputName="startTime"
                    type="time"
                    disabled={!setDateTime}
                    value={startTime}
                    onChange={(inputName, value) => this.handleInputChange(inputName, value)}
                  />
                </div>
                <div className="col-xs-12 col-sm-6 timeOptionContainer">
                  {this.renderEndTime()}
                </div>
              </div>

              <InputField
                labelName="Location *"
                inputName="location"
                placeholderText="The location of your activity..."
                required
                value={location}
                onChange={(inputName, value) => this.handleInputChange(inputName, value)}
              />
              <InputField
                labelName="Number of attendees *"
                inputName="numberOfAttendees"
                type="number"
                required
                value={numberOfAttendees}
                onChange={(inputName, value) => this.handleInputChange(inputName, value)}
              />
            </div>

            <div className="col-xs-12 col-md-6 col-right">
              <InputField
                labelName="Description *"
                inputName="description"
                placeholderText="Make a nice description for the participants..."
                required
                value={description}
                onChange={(inputName, value) => this.handleInputChange(inputName, value)}
              />
              <SelectOption
                selectingCategory
                labelName="Category *"
                options={categoryOptions}
                currentlySelected={category}
                handleSelect={selectedCategory => this.handleSelect(selectedCategory)}
              />

              <div className="row">
                <div className="col-xs-12 btnContainer">
                  <MainButton
                    disabled={!submit}
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
  dispatchAddActivity: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  categories: state.categories.categories,
  userId: state.auth.userId,
});

const mapDispatchToProps = dispatch => ({
  dispatchAddActivity: activity => dispatch(addActivity(activity)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateActivityForm);
