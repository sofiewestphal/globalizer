import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';
import ToggleButton from './ToggleButton';

const ToggleActivities = (props) => {
  const { handleToggle, activeToggleButton } = props;
  return (
    <div className="row">
      <div className="col-xs-12 col md-10 col-md-offset-1">
        <div className="toggleActivitiesContainer">
          <ToggleButton
            active={activeToggleButton === 'attending'}
            label="I'm attending"
            toggleTo="attending"
            handleToggle={toggleTo => handleToggle(toggleTo)}
          />
          <ToggleButton
            active={activeToggleButton !== 'attending'}
            label="Created by me"
            toggleTo="created"
            handleToggle={toggleTo => handleToggle(toggleTo)}
          />
        </div>
      </div>
    </div>
  );
};

ToggleActivities.propTypes = {
  activeToggleButton: PropTypes.string.isRequired,
  handleToggle: PropTypes.func.isRequired,
};

export default ToggleActivities;
