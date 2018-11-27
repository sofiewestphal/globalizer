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

export const Search = (props) => {
  const {
    width,
    height,
    iconClassName,
  } = props;
  return (
    <svg
      className={iconClassName}
      width={width}
      height={height}
      viewBox="0 0 20 20"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Design---desktop" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" opacity="0.3">
        <g id="Browse-activities" transform="translate(-567.000000, -301.000000)" fill="#000000" fill-rule="nonzero">
          <g id="search" transform="translate(210.000000, 271.000000)">
            <g id="loupe" transform="translate(357.000000, 30.000000)">
              <path d="M12.109375,7.421875 C11.89375,7.421875 11.71875,7.596875 11.71875,7.8125 C11.71875,8.028125 11.89375,8.203125 12.109375,8.203125 C12.325,8.203125 12.5,8.028125 12.5,7.8125 C12.5,7.596875 12.325,7.421875 12.109375,7.421875 Z" id="Shape"></path>
              <path d="M19.5422266,17.3327734 L14.3281641,12.1187109 C15.1775781,10.8392578 15.625,9.35761719 15.625,7.8125 C15.625,3.5046875 12.1203125,0 7.8125,0 C3.5046875,0 0,3.5046875 0,7.8125 C0,12.1203125 3.5046875,15.625 7.8125,15.625 C9.35765625,15.625 10.8392969,15.1775391 12.1187109,14.3282031 L13.5599219,15.7694141 C13.5601172,15.7696094 13.5603125,15.7698047 13.5605469,15.7700391 L17.3327344,19.5422266 C17.6279688,19.8374219 18.0202734,20 18.4375,20 C18.8547266,20 19.2470312,19.8374219 19.5421094,19.5423438 C19.8373828,19.2473047 20,18.8549609 20,18.4375 C20,18.0200391 19.8373828,17.6276953 19.5422266,17.3327734 Z M11.935,13.5049609 C11.935,13.505 11.9349609,13.505 11.9349219,13.5050391 C10.7291797,14.3808203 9.30371094,14.84375 7.8125,14.84375 C3.93546875,14.84375 0.78125,11.6895312 0.78125,7.8125 C0.78125,3.93546875 3.93546875,0.78125 7.8125,0.78125 C11.6895312,0.78125 14.84375,3.93546875 14.84375,7.8125 C14.84375,9.30371094 14.3808203,10.7291797 13.505,11.9349609 C13.0668359,12.5385938 12.5386328,13.0668359 11.935,13.5049609 Z M12.7545312,13.8591016 C13.1588281,13.5283594 13.5283984,13.1587891 13.8591016,12.7545312 L14.9673437,13.8627734 C14.6303125,14.2605469 14.2605469,14.6303516 13.8627734,14.9673437 L12.7545312,13.8591016 Z M18.9898047,18.9898047 C18.8421484,19.1374609 18.6460156,19.21875 18.4375,19.21875 C18.2289844,19.21875 18.0328516,19.1374609 17.8851953,18.9898047 L14.4166406,15.52125 C14.8122266,15.1817578 15.1817578,14.8122656 15.5212109,14.4166797 L18.9898828,17.8853516 C19.1374609,18.0327734 19.21875,18.2288281 19.21875,18.4375 C19.21875,18.6461719 19.1374609,18.8422266 18.9898047,18.9898047 Z" id="Shape"></path>
              <path d="M7.8125,1.5625 C4.36621094,1.5625 1.5625,4.36621094 1.5625,7.8125 C1.5625,11.2587891 4.36621094,14.0625 7.8125,14.0625 C11.2587891,14.0625 14.0625,11.2587891 14.0625,7.8125 C14.0625,4.36621094 11.2587891,1.5625 7.8125,1.5625 Z M7.8125,13.28125 C4.79703125,13.28125 2.34375,10.8279688 2.34375,7.8125 C2.34375,4.79703125 4.79703125,2.34375 7.8125,2.34375 C10.8279688,2.34375 13.28125,4.79703125 13.28125,7.8125 C13.28125,10.8279688 10.8279688,13.28125 7.8125,13.28125 Z" id="Shape"></path>
              <path d="M12.1900391,6.13566406 C11.8536719,5.26019531 11.2680078,4.51167969 10.4962891,3.97109375 C9.70621094,3.41757812 8.77816406,3.125 7.8125,3.125 C7.59679687,3.125 7.421875,3.29992187 7.421875,3.515625 C7.421875,3.73132813 7.59679687,3.90625 7.8125,3.90625 C9.41792969,3.90625 10.8840234,4.91476562 11.4607813,6.41589844 C11.5204687,6.57121094 11.6684766,6.66652344 11.8255078,6.66652344 C11.8720703,6.66652344 11.9194531,6.658125 11.9655078,6.64042969 C12.166875,6.56304687 12.2674219,6.33707031 12.1900391,6.13566406 Z" id="Shape"></path>
            </g>
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
  handleClick: () => { },
};

Arrow.propTypes = generalProptypes;
Arrow.defaultProps = defaultProptypes;

Search.propTypes = generalProptypes;
