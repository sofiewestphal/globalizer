import React from 'react';
import LandingHeading from '../../components/LandingHeading';
import MainButton from '../../components/MainButton';
import LandingTopBar from '../../components/LandingTopBar';
import CreateProfileForm from '../../components/Modal/CreateProfileForm';
import Modal from '../../components/Modal';
import LoginForm from '../../components/Modal/LoginForm';

class LandingScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      showPopup: false,
      showLogin: false,
    };
  }

  toggleModal(key) {
    this.setState({
      [key]: !this.state[key],
    });
  }

  render() {
    const { showPopup, showLogin } = this.state;
    return (
      <div className="container-fluid landingContainer">
        <Modal
          title="Create profile"
          visible={showPopup}
          handleVisibility={() => this.toggleModal('showPopup')}
        >
          <CreateProfileForm />
        </Modal>

        <Modal
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

export default LandingScreen;
