import React from 'react';
import './index.scss';
import ActivityInputField from './ActivityInputField';

class CreateActivityForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activitytitle: '',
      location: '',
      description: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(name, value) {
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { activitytitle, location, description } = this.state;
    return (
      <div className="col-xs-12 col-sm-10 col-sm-offset-1">
        <form>
          <div className="col-12 col-md-6 col-left">
            <ActivityInputField
              labelName="Activity title"
              inputName="activitytitle"
              placeholderText="Give an inspiring title..."
              value={activitytitle}
              onChange={this.handleInputChange}
            />
            <ActivityInputField
              labelName="Location"
              inputName="loaction"
              placeholderText="The location of your activity..."
              value={location}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="col-12 col-md-6 col-right">
            <ActivityInputField
              labelName="Description"
              inputName="description"
              placeholderText="Make a nice description for the participants..."
              value={description}
              onChange={this.handleInputChange}
            />
            <button className="primaryBtn" type="button"> Submit your activity</button>
          </div>
        </form>
      </div>
    );
  }
}

export default CreateActivityForm;
