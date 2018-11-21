import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import './index.scss';
import MainButton from '../MainButton';

class CTA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navigate: false,
    };
  }

  handleNavigation = () => {
    this.setState({
      navigate: true,
    });
  }

  render() {
    const { text, secondText } = this.props;
    const { navigate } = this.state;

    if (navigate === true) {
      return <Redirect to="/create" />;
    }
    return (
      <div className="ctaContainer">
        <h3>
          {text}
        </h3>
        {secondText && (
          <h3 className="secondText">
            {secondText}
          </h3>
        )}
        <MainButton
          text="Create Activity"
          onClick={() => this.handleNavigation()}
        />
      </div>
    );
  }
}


CTA.propTypes = {
  text: PropTypes.string.isRequired,
  secondText: PropTypes.string,
};

CTA.defaultProps = {
  secondText: null,
};

export default CTA;
