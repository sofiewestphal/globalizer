/**
 * Core
 */
import React from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
/**
 * Components
 */
import LandingHeading from '../../components/LandingHeading';
import MainButton from '../../components/MainButton';
import LandingTopBar from '../../components/LandingTopBar';
import CreateProfileForm from '../../components/Modal/CreateProfileForm';
import Modal from '../../components/Modal';
import LoginForm from '../../components/Modal/LoginForm';
import { fetchUsersRequest, fetchUsersSuccess, fetchUsersFailure } from '../../actions';
import Loading from '../../components/Loading';

/* END OF IMPORTS */

/**
 * @Component - returns landing screen
 */
class LandingScreen extends React.Component {
  constructor(props) {
    super(props);
    const { userId, fetchingUsers } = this.props;
    this.state = {
      loaded: !fetchingUsers,
      showPopup: false,
      showLogin: false,
      navigate: userId !== '',
    };
  }

  componentDidMount = () => {
    console.log('componentDidMount bliver kaldt');
    this.fetchUsers();
  }

  fetchUsers = () => {
    const {
      dispatchFetchUsersRequest, dispatchFetchUsersSuccess, dispatchFetchUsersFailure,
      // dispatchAddUser,
    } = this.props;

    console.log('fetchusers bliver kaldt');

    dispatchFetchUsersRequest();

    fetch("http://localhost:5000/api/users")
      .then(res => res.json())
      .then((result) => {
        dispatchFetchUsersSuccess(result);
      },
      (error) => {
        dispatchFetchUsersFailure(error);
      });
  }

  toggleModal(key) {
    this.setState({
      [key]: !this.state[key],
    });
  }

  render() {
    const {
      showPopup, showLogin, navigate,
    } = this.state;

    console.log(navigate);

    if (navigate === true) {
      console.log('navigate');
      return <Redirect to="/browse" />;
    }

    return (
      <div className="container-fluid landingContainer">
        <Modal
          innerModalClass="row modal_inner"
          title="Create profile"
          visible={showPopup}
          handleVisibility={() => this.toggleModal('showPopup')}
        >
          <CreateProfileForm />
        </Modal>

        <Modal
          innerModalClass="row modal_inner login_inner"
          title="Login"
          visible={showLogin}
          handleVisibility={() => this.toggleModal('showLogin')}
        >
          <LoginForm />
        </Modal>
        <div className="row overlay">
          <div className="col-sx-12 landingContentContainer">
            <LandingTopBar
              handleClick={key => this.toggleModal(key)}
            />
            <div className="row landingCtaContainer">
              <div className="col-sx-12">
                <LandingHeading />
                <div className="row">
                  <div className="col-sx-12 buttonContainer">
                    <MainButton
                      text="Sign up"
                      onClick={() => this.toggleModal('showPopup')}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

LandingScreen.propTypes = {
  userId: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
  fetchingUsers: PropTypes.bool.isRequired,
  dispatchFetchUsersRequest: PropTypes.func.isRequired,
  dispatchFetchUsersSuccess: PropTypes.func.isRequired,
  dispatchFetchUsersFailure: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  userId: state.auth.userId,
  fetchingUsers: state.users.fetching,
});

const mapDispatchToProps = dispatch => ({
  dispatchFetchUsersRequest: () => dispatch(fetchUsersRequest()),
  dispatchFetchUsersSuccess: users => dispatch(fetchUsersSuccess(users)),
  dispatchFetchUsersFailure: error => dispatch(fetchUsersFailure(error)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LandingScreen));
