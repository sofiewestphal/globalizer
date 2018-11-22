import React from 'react';
import './index.scss';
import ActivityInputField from './ActivityInputField';
import MainButton from '../MainButton';
import ActivityFormOption from './ActivityFormOption';

class CreateActivityForm extends React.Component {
  constructor(props) {
    let attendees = Array.from(Array(29), (_, x) => x + 2);
    console.log(attendees);
    super(props);
    this.state = {
      activitytitle: '',
      location: '',
      description: '',
      selectDate: false,
      selectCategory: false,
      numberOfAttendees: false,
      categoryOptions: [
        { label: 'Beauty & Wellness', id: 'categories_beautyWellness', checked: false },
        { label: 'Culture', id: 'categories_culture', checked: false },
        { label: 'Family', id: 'categories_family', checked: false },
        { label: 'Food & Drinks', id: 'categories_foodDrinks', checked: false },
        { label: 'Games', id: 'categories_games', checked: false },
        { label: 'Hobbies & Crafts', id: 'categories_hobbiesCrafts', checked: false },
        { label: 'Languages', id: 'categories_languages', checked: false },
        { label: 'Movies', id: 'categories_movies', checked: false },
        { label: 'Music', id: 'categories_music', checked: false },
        { label: 'Nightlife', id: 'categories_nightlift', checked: false },
        { label: 'Outdoor', id: 'categories_outdoor', checked: false },
        { label: 'Sports', id: 'categories_sports', checked: false },
      ],
      attendeesOptions: attendees,
    };
  }

  handleInputChange = (name, value) => {
    this.setState({
      [name]: value,
    });
  }

  handleOptionClick = (optionTitle) => {
    const newTitleState = !this.state[optionTitle];

    this.setState({
      selectCategory: false,
      numberOfAttendees: false,
      [optionTitle]: newTitleState,
    });
  }

  render() {
    const {
      activitytitle,
      location,
      description,
      selectDate,
      startTimeHours,
      startTimeMinutes,
      selectCategory,
      categoryOptions,
      numberOfAttendees,
      attendeesOptions,
    } = this.state;
    return (
      <div className="col-xs-12 col-sm-10 col-sm-offset-1">
        <div className="row">
          <form>
            <div className="col-xs-12 col-md-6 col-left">
              <ActivityInputField
                labelName="Activity title"
                inputName="activitytitle"
                placeholderText="Give an inspiring title..."
                value={activitytitle}
                onChange={this.handleInputChange}
              />
              <ActivityFormOption
                labelName="Date"
                title="Select date"
                optionTitle="selectDate"
                active={selectDate}
                handleClick={optionTitle => this.handleOptionClick(optionTitle)}
              />
              <div className="timeOptionContainer">
                <ActivityFormOption
                  labelName="Time"
                  title="00"
                  optionTitle="startTimeHours"
                  active={startTimeHours}
                  handleClick={optionTitle => this.handleOptionClick(optionTitle)}
                />
                <p>:</p>
                <ActivityFormOption
                  title="00"
                  optionTitle="startTimeMinutes"
                  active={startTimeMinutes}
                  handleClick={optionTitle => this.handleOptionClick(optionTitle)}
                />
              </div>
              <ActivityInputField
                labelName="Location"
                inputName="loaction"
                placeholderText="The location of your activity..."
                value={location}
                onChange={this.handleInputChange}
              />
              <ActivityFormOption
                labelName="Number of attendees"
                title="02"
                optionTitle="numberOfAttendees"
                active={numberOfAttendees}
                options={attendeesOptions}
                handleClick={optionTitle => this.handleOptionClick(optionTitle)}
              />
            </div>
            <div className="col-xs-12 col-md-6 col-right">
              <ActivityInputField
                labelName="Description"
                inputName="description"
                placeholderText="Make a nice description for the participants..."
                value={description}
                onChange={this.handleInputChange}
              />
              <ActivityFormOption
                labelName="Category"
                title="Select category"
                optionTitle="selectCategory"
                active={selectCategory}
                options={categoryOptions}
                handleClick={optionTitle => this.handleOptionClick(optionTitle)}
              />
              <div className="row btnContainer">
                <div className="col-xs-12">
                  <MainButton
                    text="Submit activity"
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

export default CreateActivityForm;
