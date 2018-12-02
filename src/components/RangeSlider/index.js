import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './index.scss';


const RangeSlider = (props) => {
  const {
    min,
    max,
    handleClick,
  } = props;
  return (
    <div className="rangeSliderContainer">
      <div className="rangeContainer">
        <p>{min}</p>
        <p>{max}</p>
      </div>
      <div className="range-slider">
        <input
          type="range"
          value={min}
          onChange={event => handleClick('min', Number(event.target.value))}
          min={2}
          max={30}
        />
        <input
          type="range"
          value={max}
          onChange={event => handleClick('max', Number(event.target.value))}
          min={2}
          max={30}
        />
      </div>
    </div>
  );
};


RangeSlider.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  min: state.filters.attendees.min,
  max: state.filters.attendees.max,
});

export default connect(mapStateToProps)(RangeSlider);
