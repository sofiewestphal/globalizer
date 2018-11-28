import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import './index.scss';
import MainButton from '../MainButton';
import InputField from '../InputField';
import { loginSucces, login, loginError, setCategoryChecked } from '../../actions';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginEmail: '',
      loginPassword: '',
      emailError: false,
      navigate: false,
    };
  }

  handleInputChange = (name, value) => {
    this.setState({
      [name]: value,
    });
  }

  handleSubmit = () => {
    const { dispatchLogin, dispatchLoginError, users } = this.props;
    const { loginEmail, loginPassword } = this.state;

    dispatchLogin(loginEmail, loginPassword);

    const correctUser = users.filter(user => user.email === loginEmail);
    const correctPassword = correctUser[0].password === loginPassword;
    let errorMessage = false;

    if(correctUser.length === 0) {
      errorMessage = 'There is no user with that email';
      dispatchLoginError();
    } else if(!correctPassword) {
      errorMessage = 'The email and password doesn\'t match';
      dispatchLoginError();
    } else {
      this.login(correctUser[0]);
    }

    this.setState({
      emailError: errorMessage,
    });
  }

  login = (user) => {
    const { dispatchLoginSucces, dispatchSetCategoryChecked } = this.props;
    dispatchLoginSucces(user.id);
    user.categories.map(category => dispatchSetCategoryChecked(category));
    this.setState({
      navigate: true,
    });
  }

  render() {
    const {
      loginEmail, loginPassword,
      navigate, emailError,
    } = this.state;

    const submit = loginEmail !== '' && loginPassword !== '';

    const errorClassName = emailError ? 'errorMessage show' : 'errorMessage';

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
                        labelName="Email *"
                        inputName="loginEmail"
                        placeholderText="Your email..."
                        value={loginEmail}
                        onChange={(inputName, value) => this.handleInputChange(inputName, value)}
                      />
                    </div>
                    <div className="col-sx-12 col-md-6">
                      <InputField
                        labelName="Password *"
                        inputName="loginPassword"
                        placeholderText="Your lastname..."
                        value={loginPassword}
                        type="password"
                        onChange={(inputName, value) => this.handleInputChange(inputName, value)}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="row bottomRow">
                <div className="col-sx-12 col-md-4 btnContainer">
                  <div className={errorClassName}>
                    <p>{emailError}</p>
                  </div>
                  <MainButton
                    className="mainBtn"
                    disabled={!submit}
                    text="Login"
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

LoginForm.propTypes = {
  users: PropTypes.array.isRequired,
  dispatchLogin: PropTypes.func.isRequired,
  dispatchLoginSucces: PropTypes.func.isRequired,
  dispatchLoginError: PropTypes.func.isRequired,
  dispatchSetCategoryChecked: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  users: state.users.users,
});

const mapDispatchToProps = dispatch => ({
  dispatchLogin: (email, password) => dispatch(login(email, password)),
  dispatchLoginSucces: userId => dispatch(loginSucces(userId)),
  dispatchLoginError: () => dispatch(loginError()),
  dispatchSetCategoryChecked: label => dispatch(setCategoryChecked(label)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
