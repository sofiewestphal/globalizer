import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import './index.scss';
import MainButton from '../MainButton';
import InputField from '../InputField';
import SelectOption from '../SelectOption';
import ImageUpload from '../ImageUpload';
import { Close } from '../../assets/icons/icons';
import { addUser } from '../../actions';

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
      image: '',

      emails: [],
      setSecondLanguage: false,
      categoryOptions: categories,
      navigate: false,
    };
  }

  componentDidMount = () => {
    const { users } = this.props;
    const emails = users.map(user => user.email);
    this.setState({
      emails,
    });
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

  handleSetSecondLanguage = () => {
    const { setSecondLanguage } = this.state;
    this.setState({
      setSecondLanguage: !setSecondLanguage,
    });
  }

  handleSubmit = () => {
    const { dispatchAddUser } = this.props;
    const {
      username,
      userlastname,
      email,
      password,
      date,
      language,
      secondLanguage,
      category,
      image,
      emails,
    } = this.state;

    const user = {
      // userId: this.id,
      username,
      userlastname,
      email,
      password,
      date,
      language,
      secondLanguage,
      category,
      image,
    };
    console.log(user);
    const uniqueEmail = emails.indexOf(email) === -1;
    if (uniqueEmail) {
      console.log('user dispatched');
      dispatchAddUser(user);
      this.setState({
        navigate: true,
      });
    } else {
      console.log('user already exists');
      // const errorClassName = email === uniqueEmail ? 'errorMessage' : 'errorMessage show';
    }
  }

  renderSecondLanguage = () => {
    const { secondLanguage, setSecondLanguage } = this.state;

    if (setSecondLanguage) {
      return (
        <div className="setSecondLanguageContainer">
          <InputField
            labelName="Second language"
            inputName="secondLanguage"
            placeholderText="Select language"
            value={secondLanguage}
            onChange={(inputName, value) => this.handleInputChange(inputName, value)}
          />
          <Close
            width="40px"
            height="70px"
            strokeColour="#242424"
            iconClassName="closeSetSecondLanguage"
            handleClick={() => this.handleSetSecondLanguage()}
          />
        </div>
      );
    }

    return (
      <div className="secondLanguageContainer">
        <button
          className="btnAddLanguage"
          type="button"
          onClick={() => this.handleSetSecondLanguage()}
        >
          + add language
        </button>
      </div>
    );
  }

  render() {
    const {
      username,
      userlastname,
      email,
      password,
      date,
      language,
      categoryOptions,
      category,
      image,
      navigate,
    } = this.state;

    const submit = username !== '' && userlastname !== '' && email !== ''
      && password !== '' && date !== '' && category !== '';

    if (navigate === true) {
      return <Redirect to="/browse" />;
    }

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
                        labelName="Name *"
                        inputName="username"
                        placeholderText="Your name..."
                        value={username}
                        onChange={(inputName, value) => this.handleInputChange(inputName, value)}
                      />
                    </div>
                    <div className="col-sx-12 col-md-6">
                      <InputField
                        labelName="Last name *"
                        inputName="userlastname"
                        placeholderText="Your lastname..."
                        value={userlastname}
                        onChange={(inputName, value) => this.handleInputChange(inputName, value)}
                      />
                    </div>
                  </div>

                  <div className="infoContainer">
                    <div className="col-sx-12 col-md-6">
                      <InputField
                        labelName="Email *"
                        inputName="email"
                        placeholderText="Your email..."
                        value={email}
                        onChange={(inputName, value) => this.handleInputChange(inputName, value)}
                      />
                    </div>
                    <div className="col-sx-12 col-md-6">
                      <InputField
                        labelName="Password *"
                        inputName="password"
                        placeholderText="Your lastname..."
                        value={password}
                        type="password"
                        onChange={(inputName, value) => this.handleInputChange(inputName, value)}
                      />
                    </div>
                  </div>

                  <div className="infoContainer">
                    <div className="col-sx-12 dateContainer">
                      <InputField
                        labelName="Date of Birth *"
                        inputName="date"
                        value={date}
                        type="date"
                        onChange={(inputName, value) => this.handleInputChange(inputName, value)}
                      />
                    </div>
                  </div>

                  <div className="infoContainer">
                    <div className="col-sx-12 languageContainer">
                      <InputField
                        labelName="Language"
                        inputName="language"
                        placeholderText="Select language"
                        value={language}
                        onChange={(inputName, value) => this.handleInputChange(inputName, value)}
                      />
                      {this.renderSecondLanguage()}
                    </div>
                  </div>
                </div>
                <div className="col-sx-12 col-md-4 imageContainer">
                  <h4>Profile picture</h4>
                  <ImageUpload
                    inputName="image"
                    value={image}
                    type="file"
                    onChange={(inputName, value) => this.handleUploadFile(inputName, value)}
                  />
                </div>
              </div>

              <div className="row bottomRow">
                <div className="col-sx-12 col-md-8">
                  <SelectOption
                    selectingCategory
                    labelName="Interests *"
                    optionTitle="selectCategory"
                    options={categoryOptions}
                    currentlySelected={category}
                    handleSelect={selectedCategory => this.handleSelect(selectedCategory)}
                  />
                </div>
                <div className="col-sx-12 col-md-4 btnContainer">
                  <div className="errorMessage">
                    <p>Sorry, this email already exists...</p>
                  </div>
                  <MainButton
                    className="mainBtn"
                    disabled={!submit}
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
  users: PropTypes.array.isRequired,
  dispatchAddUser: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  categories: state.categories.categories,
  users: state.users.users,
});

const mapDispatchToProps = dispatch => ({
  dispatchAddUser: user => dispatch(addUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateProfileForm);
