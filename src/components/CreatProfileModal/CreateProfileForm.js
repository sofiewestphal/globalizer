import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './index.scss';
import MainButton from '../MainButton';
import InputField from '../InputField';
import SelectOption from '../SelectOption';

class CreateProfileForm extends React.Component {
  constructor(props) {
    super(props);
    const { categories } = this.props;
    this.state = {
      username: '',
      userlastname: '',
      date: '',
      language: '',
      category: '',
      categoryOptions: categories,
    };
  }

  handleInputChange = (name, value) => {
    this.setState({
      [name]: value,
    });
  }

  render() {
    const {
      username,
      userlastname,
      date,
      language,
      categoryOptions,
      category,
    } = this.state;
    return (
      <div className="container-fluid formContainer">
        <div className="row">
          <form>
            <div className="col-sx-12 col">

              <div className="row">
                <div className="col-sx-12 col-md-8">
                  <div className="infoContainer">
                    <div className="col-sx-12 col-md-6">
                      <InputField
                        labelName="Name"
                        inputName="username"
                        placeholderText="Your name..."
                        value={username}
                        onChange={(inputName, value) => this.handleInputChange(inputName, value)}
                      />
                    </div>
                    <div className="col-sx-12 col-md-6">
                      <InputField
                        labelName="Last name"
                        inputName="userlastname"
                        placeholderText="Your lastname..."
                        value={userlastname}
                        onChange={(inputName, value) => this.handleInputChange(inputName, value)}
                      />
                    </div>
                  </div>

                  <div className="infoContainer">
                    <InputField
                      labelName="Date of Birth"
                      inputName="date"
                      value={date}
                      type="date"
                      onChange={(inputName, value) => this.handleInputChange(inputName, value)}
                    />
                  </div>

                  <div className="infoContainer">
                    <InputField
                      labelName="Language"
                      inputName="langauge"
                      placeholderText="Select language"
                      value={language}
                      onChange={(inputName, value) => this.handleInputChange(inputName, value)}
                    />
                  </div>
                </div>
                <div className="col-sx-12 col-md-4"><h4>Profile picture</h4></div>
              </div>

              <div className="row">
                <div className="col-sx-12 col-md-8">
                  <SelectOption
                    labelName="Interests"
                    title="Select category"
                    optionTitle="selectCategory"
                    options={categoryOptions}
                    currentlySelected={category}
                    handleSelect={selectedCategory => this.handleSelect(selectedCategory)}
                  />
                </div>
                <div className="col-sx-12 col-md-4">
                  <MainButton
                    text="Create profile"
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

CreateProfileForm.propTypes = {
  categories: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  categories: state.categories.categories,
});

export default connect(mapStateToProps)(CreateProfileForm);
