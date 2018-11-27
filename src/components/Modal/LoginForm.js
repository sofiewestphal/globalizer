import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import './index.scss';
import MainButton from '../MainButton';
import InputField from '../InputField';
import { loginSucces, login, loginError } from '../../actions';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginEmail: '',
      loginPassword: '',
      id: '',
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
    const {
      dispatchLogin, dispatchLoginSucces, dispatchLoginError, users,
    } = this.props;
    const { loginEmail, loginPassword } = this.state;
    dispatchLogin(loginEmail, loginPassword);

    const correctUser = users.filter(user => user.email === loginEmail);
    const correctPassword = correctUser.password === loginPassword;
    let errorMessage = false;
    if(correctUser.length === 0) {
      errorMessage = 'There is no user with that email';
      dispatchLoginError();
    } if(!correctPassword) {
      errorMessage = 'The email and password doesn\'t match';
      dispatchLoginError();
    } else {
      dispatchLoginSucces(correctUser.id);
    }

    this.setState({
      emailError: errorMessage,
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
};

const mapStateToProps = state => ({
  users: state.users.users,
});

const mapDispatchToProps = dispatch => ({
  dispatchLogin: (email, password) => dispatch(login(email, password)),
  dispatchLoginSucces: userId => dispatch(loginSucces(userId)),
  dispatchLoginError: () => dispatch(loginError()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
