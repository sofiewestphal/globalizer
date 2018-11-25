import React from 'react';
import PropTypes from 'prop-types';


export const Arrow = (props) => {
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

export const Close = (props) => {
  const {
    width,
    height,
    strokeColour,
    iconClassName,
    handleClick,
  } = props;
  return (
    <svg
      className={iconClassName}
      width={width}
      height={height}
      onClick={() => handleClick()}
      viewBox="0 0 20 20"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Styles" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g transform="translate(-273.000000, -3382.000000)" fill={strokeColour} fillRule="nonzero" id="Group-2">
          <g transform="translate(272.000000, 3382.000000)">
            <rect id="Rectangle-3" transform="translate(11.000000, 10.388889) rotate(-45.000000) translate(-11.000000, -10.388889) " x="-1.96296296" y="8.88888889" width="25.9259259" height="3" rx="1.5"></rect>
            <rect id="Rectangle-3" transform="translate(11.000000, 10.388889) scale(-1, 1) rotate(-45.000000) translate(-11.000000, -10.388889) " x="-1.96296296" y="8.88888889" width="25.9259259" height="3" rx="1.5"></rect>
          </g>
        </g>
      </g>
    </svg>
  );
};

const generalProptypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  strokeColour: PropTypes.string,
  iconClassName: PropTypes.string,
};

const defaultProptypes = {
  strokeColour: '#242424',
  iconClassName: '',
};

Close.propTypes = {
  ...generalProptypes,
  handleClick: PropTypes.func,
};

Close.defaultProps = {
  ...defaultProptypes,
  handleClick: () => {},
};

Arrow.propTypes = generalProptypes;
Arrow.defaultProps = defaultProptypes;
