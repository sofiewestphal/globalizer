import React from 'react';
import PropTypes from 'prop-types';


const Arrow = (props) => {
  const {
    width,
    height,
    strokeColour,
    iconClassName,
  } = props;
  return (
    <svg
      className={iconClassName}
      width={width}
      height={height}
      viewBox="0 0 16 9"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Design---desktop" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g className="arrow_stroke" id="Browse-activities" transform="translate(-834.000000, -1089.000000)" fillRule="nonzero" stroke={strokeColour} strokeWidth="2">
          <g id="Group-15" transform="translate(209.000000, 1002.000000)">
            <polyline id="Triangle-2" points="640.403689 88 632.993394 94 625.743852 88"></polyline>
          </g>
        </g>
      </g>
    </svg>
  );
};

Arrow.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  strokeColour: PropTypes.string.isRequired,
  iconClassName: PropTypes.string.isRequired,
};


export default Arrow;
