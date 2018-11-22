import React from 'react';
import LandingHeading from '../../components/LandingHeading';
import MainButton from '../../components/MainButton';
import LandingTopBar from '../../components/LandingTopBar';
import CreateProfileModal from '../../components/CreatProfileModal';

class LandingScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      showPopup: false,
    };
  }

  toggleProfileModal() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  render() {
    const { showPopup } = this.state;
    return (
      <div className="container-fluid landingContainer">
        <CreateProfileModal
          visible={showPopup}
          handleVisibility={() => this.toggleProfileModal()}
        />
        <div className="row overlay">
          <div className="col-sx-12 landingContentContainer">
            <LandingTopBar />
            <div className="row landingCtaContainer">
              <div className="col-sx-12">
                <LandingHeading />
                <div className="row">
                  <div className="col-sx-12 buttonContainer">
                    <MainButton
                      text="Sign up"
                      onClick={() => this.toggleProfileModal()}
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
