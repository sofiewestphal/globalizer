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
            <polyline id="Triangle-2" points="640.403689 88 632.993394 94 625.743852 88" />
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
            <rect id="Rectangle-3" transform="translate(11.000000, 10.388889) rotate(-45.000000) translate(-11.000000, -10.388889) " x="-1.96296296" y="8.88888889" width="25.9259259" height="3" rx="1.5" />
            <rect id="Rectangle-3" transform="translate(11.000000, 10.388889) scale(-1, 1) rotate(-45.000000) translate(-11.000000, -10.388889) " x="-1.96296296" y="8.88888889" width="25.9259259" height="3" rx="1.5" />
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
    strokeColour,
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
      <g id="Design---desktop" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" opacity="0.3">
        <g id="Browse-activities" transform="translate(-567.000000, -301.000000)" fill={strokeColour} fillRule="nonzero">
          <g id="search" transform="translate(210.000000, 271.000000)">
            <g id="loupe" transform="translate(357.000000, 30.000000)">
              <path d="M12.109375,7.421875 C11.89375,7.421875 11.71875,7.596875 11.71875,7.8125 C11.71875,8.028125 11.89375,8.203125 12.109375,8.203125 C12.325,8.203125 12.5,8.028125 12.5,7.8125 C12.5,7.596875 12.325,7.421875 12.109375,7.421875 Z" id="Shape" />
              <path d="M19.5422266,17.3327734 L14.3281641,12.1187109 C15.1775781,10.8392578 15.625,9.35761719 15.625,7.8125 C15.625,3.5046875 12.1203125,0 7.8125,0 C3.5046875,0 0,3.5046875 0,7.8125 C0,12.1203125 3.5046875,15.625 7.8125,15.625 C9.35765625,15.625 10.8392969,15.1775391 12.1187109,14.3282031 L13.5599219,15.7694141 C13.5601172,15.7696094 13.5603125,15.7698047 13.5605469,15.7700391 L17.3327344,19.5422266 C17.6279688,19.8374219 18.0202734,20 18.4375,20 C18.8547266,20 19.2470312,19.8374219 19.5421094,19.5423438 C19.8373828,19.2473047 20,18.8549609 20,18.4375 C20,18.0200391 19.8373828,17.6276953 19.5422266,17.3327734 Z M11.935,13.5049609 C11.935,13.505 11.9349609,13.505 11.9349219,13.5050391 C10.7291797,14.3808203 9.30371094,14.84375 7.8125,14.84375 C3.93546875,14.84375 0.78125,11.6895312 0.78125,7.8125 C0.78125,3.93546875 3.93546875,0.78125 7.8125,0.78125 C11.6895312,0.78125 14.84375,3.93546875 14.84375,7.8125 C14.84375,9.30371094 14.3808203,10.7291797 13.505,11.9349609 C13.0668359,12.5385938 12.5386328,13.0668359 11.935,13.5049609 Z M12.7545312,13.8591016 C13.1588281,13.5283594 13.5283984,13.1587891 13.8591016,12.7545312 L14.9673437,13.8627734 C14.6303125,14.2605469 14.2605469,14.6303516 13.8627734,14.9673437 L12.7545312,13.8591016 Z M18.9898047,18.9898047 C18.8421484,19.1374609 18.6460156,19.21875 18.4375,19.21875 C18.2289844,19.21875 18.0328516,19.1374609 17.8851953,18.9898047 L14.4166406,15.52125 C14.8122266,15.1817578 15.1817578,14.8122656 15.5212109,14.4166797 L18.9898828,17.8853516 C19.1374609,18.0327734 19.21875,18.2288281 19.21875,18.4375 C19.21875,18.6461719 19.1374609,18.8422266 18.9898047,18.9898047 Z" id="Shape" />
              <path d="M7.8125,1.5625 C4.36621094,1.5625 1.5625,4.36621094 1.5625,7.8125 C1.5625,11.2587891 4.36621094,14.0625 7.8125,14.0625 C11.2587891,14.0625 14.0625,11.2587891 14.0625,7.8125 C14.0625,4.36621094 11.2587891,1.5625 7.8125,1.5625 Z M7.8125,13.28125 C4.79703125,13.28125 2.34375,10.8279688 2.34375,7.8125 C2.34375,4.79703125 4.79703125,2.34375 7.8125,2.34375 C10.8279688,2.34375 13.28125,4.79703125 13.28125,7.8125 C13.28125,10.8279688 10.8279688,13.28125 7.8125,13.28125 Z" id="Shape" />
              <path d="M12.1900391,6.13566406 C11.8536719,5.26019531 11.2680078,4.51167969 10.4962891,3.97109375 C9.70621094,3.41757812 8.77816406,3.125 7.8125,3.125 C7.59679687,3.125 7.421875,3.29992187 7.421875,3.515625 C7.421875,3.73132813 7.59679687,3.90625 7.8125,3.90625 C9.41792969,3.90625 10.8840234,4.91476562 11.4607813,6.41589844 C11.5204687,6.57121094 11.6684766,6.66652344 11.8255078,6.66652344 C11.8720703,6.66652344 11.9194531,6.658125 11.9655078,6.64042969 C12.166875,6.56304687 12.2674219,6.33707031 12.1900391,6.13566406 Z" id="Shape" />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

export const Marker = (props) => {
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
      viewBox="0 0 17 20"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Styles" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g transform="translate(-277.000000, -3341.000000)" fill={strokeColour} fillRule="nonzero" id="Shape">
          <path d="M285.090276,3341 C280.629274,3341 277,3344.2493 277,3348.24321 C277,3353.19978 284.240004,3360.47631 284.548254,3360.78366 C284.837786,3361.07237 285.343289,3361.07186 285.632298,3360.78366 C285.940548,3360.47631 293.180552,3353.19978 293.180552,3348.24321 C293.180465,3344.2493 289.551235,3341 285.090276,3341 Z M285.090276,3351.88747 C282.845835,3351.88747 281.019898,3350.25267 281.019898,3348.24321 C281.019898,3346.23376 282.845879,3344.59899 285.090276,3344.59899 C287.334673,3344.59899 289.160611,3346.2338 289.160611,3348.24325 C289.160611,3350.25271 287.334673,3351.88747 285.090276,3351.88747 Z" />
        </g>
      </g>
    </svg>
  );
};

export const Facebook = (props) => {
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
      viewBox="0 0 50 50"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Styles" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g transform="translate(-706.000000, -3635.000000)" fill={strokeColour} fillRule="nonzero" id="001-facebook-logo-button">
          <g transform="translate(706.000000, 3635.000000)">
            <path d="M24.826,0 C11.137,0 0,11.137 0,24.826 C0,38.514 11.137,49.652 24.826,49.652 C38.514,49.652 49.652,38.514 49.652,24.826 C49.652,11.137 38.516,0 24.826,0 Z M31,25.7 L26.961,25.7 C26.961,32.153 26.961,40.096 26.961,40.096 L20.976,40.096 C20.976,40.096 20.976,32.23 20.976,25.7 L18.131,25.7 L18.131,20.612 L20.976,20.612 L20.976,17.321 C20.976,14.964 22.096,11.281 27.016,11.281 L31.451,11.298 L31.451,16.237 C31.451,16.237 28.756,16.237 28.232,16.237 C27.708,16.237 26.963,16.499 26.963,17.623 L26.963,20.613 L31.523,20.613 L31,25.7 Z" id="Shape" />
          </g>
        </g>
      </g>
    </svg>
  );
};

export const Google = (props) => {
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
      viewBox="0 0 50 50"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Styles" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g transform="translate(-805.000000, -3625.000000)" fill={strokeColour} fillRule="nonzero" id="004-google-plus-logo-button">
          <g transform="translate(805.000000, 3625.000000)">
            <path d="M21.5,28.94 C21.339,28.833 21.174,28.717 21.001,28.6 C20.498,28.446 19.964,28.366 19.417,28.359 L19.351,28.359 C16.837,28.359 14.633,29.88 14.633,31.616 C14.633,33.506 16.522,34.983 18.932,34.983 C22.111,34.983 23.722,33.885 23.722,31.725 C23.722,31.521 23.698,31.309 23.647,31.096 C23.432,30.258 22.663,29.735 21.5,28.94 Z" id="Shape" />
            <path d="M19.719,22.352 C19.721,22.352 19.721,22.352 19.721,22.352 C20.322,22.352 20.829,22.115 21.222,21.665 C21.838,20.963 22.111,19.811 21.949,18.588 C21.664,16.402 20.101,14.582 18.47,14.535 L18.405,14.533 C17.828,14.533 17.313,14.771 16.922,15.219 C16.315,15.912 16.058,17.01 16.217,18.231 C16.503,20.415 18.099,22.302 19.696,22.352 L19.719,22.352 Z" id="Shape" />
            <path d="M24.826,0 C11.137,0 0,11.137 0,24.826 C0,38.514 11.137,49.652 24.826,49.652 C38.514,49.652 49.652,38.514 49.652,24.826 C49.652,11.137 38.516,0 24.826,0 Z M21.964,36.915 C21.026,37.186 20.011,37.323 18.946,37.323 C17.76,37.323 16.62,37.187 15.557,36.918 C13.5,36.399 11.98,35.415 11.27,34.147 C10.964,33.599 10.809,33.015 10.809,32.41 C10.809,31.787 10.958,31.155 11.252,30.529 C12.379,28.127 15.35,26.511 18.641,26.511 C18.674,26.511 18.705,26.511 18.735,26.511 C18.468,26.04 18.339,25.552 18.339,25.039 C18.339,24.784 18.373,24.524 18.441,24.259 C14.989,24.181 12.406,21.653 12.406,18.32 C12.406,15.967 14.287,13.674 16.977,12.748 C17.782,12.47 18.603,12.328 19.41,12.328 L26.792,12.328 C27.043,12.328 27.266,12.491 27.344,12.73 C27.422,12.968 27.336,13.23 27.133,13.377 L25.482,14.572 C25.383,14.642 25.264,14.68 25.141,14.68 L24.55,14.68 C25.313,15.595 25.76,16.9 25.76,18.365 C25.76,19.982 24.942,21.511 23.453,22.676 C22.303,23.572 22.258,23.819 22.258,24.33 C22.272,24.611 23.073,25.528 23.957,26.153 C26.016,27.609 26.782,29.038 26.782,31.422 C26.781,33.913 24.89,36.065 21.964,36.915 Z M38.635,24.253 C38.635,24.573 38.374,24.833 38.055,24.833 L33.86,24.833 L33.86,29.03 C33.86,29.35 33.599,29.61 33.282,29.61 L32.087,29.61 C31.765,29.61 31.505,29.35 31.505,29.03 L31.505,24.833 L27.313,24.833 C26.993,24.833 26.733,24.575 26.733,24.253 L26.733,23.06 C26.733,22.74 26.993,22.478 27.313,22.478 L31.505,22.478 L31.505,18.285 C31.505,17.964 31.765,17.705 32.087,17.705 L33.282,17.705 C33.599,17.705 33.86,17.964 33.86,18.285 L33.86,22.478 L38.054,22.478 C38.373,22.478 38.634,22.738 38.634,23.058 L38.634,24.253 L38.635,24.253 Z" id="Shape" />
          </g>
        </g>
      </g>
    </svg>
  );
};

export const Instagram = (props) => {
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
      viewBox="0 0 50 50"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Styles" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g transform="translate(-724.000000, -3716.000000)" fill={strokeColour} fillRule="nonzero" id="002-instagram-logo">
          <g transform="translate(724.000000, 3716.000000)">
            <path d="M24.825,29.796 C27.564,29.796 29.797,27.567 29.797,24.826 C29.797,23.744 29.443,22.745 28.857,21.929 C27.954,20.677 26.486,19.856 24.828,19.856 C23.169,19.856 21.702,20.676 20.797,21.928 C20.209,22.744 19.858,23.743 19.857,24.825 C19.854,27.566 22.085,29.796 24.825,29.796 Z" id="Shape" />
            <polygon id="Shape" points="35.678 18.746 35.678 14.58 35.678 13.96 35.055 13.962 30.891 13.975 30.907 18.762" />
            <path d="M24.826,0 C11.137,0 0,11.137 0,24.826 C0,38.514 11.137,49.652 24.826,49.652 C38.514,49.652 49.652,38.514 49.652,24.826 C49.652,11.137 38.516,0 24.826,0 Z M38.945,21.929 L38.945,33.489 C38.945,36.5 36.497,38.947 33.488,38.947 L16.164,38.947 C13.154,38.947 10.707,36.5 10.707,33.489 L10.707,21.929 L10.707,16.165 C10.707,13.155 13.154,10.708 16.164,10.708 L33.487,10.708 C36.497,10.708 38.945,13.155 38.945,16.165 L38.945,21.929 Z" id="Shape" />
            <path d="M32.549,24.826 C32.549,29.083 29.085,32.549 24.826,32.549 C20.567,32.549 17.104,29.083 17.104,24.826 C17.104,23.802 17.308,22.823 17.672,21.929 L13.457,21.929 L13.457,33.489 C13.457,34.983 14.67,36.193 16.163,36.193 L33.486,36.193 C34.977,36.193 36.192,34.983 36.192,33.489 L36.192,21.929 L31.975,21.929 C32.342,22.823 32.549,23.802 32.549,24.826 Z" id="Shape" />
          </g>
        </g>
      </g>
    </svg>
  );
};

export const Twitter = (props) => {
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
      viewBox="0 0 50 50"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Styles" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g transform="translate(-809.000000, -3692.000000)" fill={strokeColour} fillRule="nonzero" id="003-twitter-logo-button">
          <g transform="translate(809.000000, 3692.000000)">
            <path d="M24.826,0 C11.137,0 0,11.137 0,24.826 C0,38.514 11.137,49.652 24.826,49.652 C38.514,49.652 49.652,38.514 49.652,24.826 C49.652,11.137 38.516,0 24.826,0 Z M35.901,19.144 C35.912,19.39 35.918,19.638 35.918,19.886 C35.918,27.437 30.172,36.141 19.659,36.141 C16.432,36.141 13.428,35.198 10.9,33.576 C11.347,33.629 11.802,33.656 12.263,33.656 C14.941,33.656 17.404,32.742 19.36,31.21 C16.86,31.164 14.749,29.512 14.022,27.241 C14.37,27.307 14.729,27.344 15.096,27.344 C15.617,27.344 16.123,27.276 16.602,27.145 C13.988,26.621 12.019,24.312 12.019,21.542 C12.019,21.518 12.019,21.493 12.02,21.47 C12.79,21.897 13.671,22.155 14.607,22.184 C13.075,21.161 12.066,19.411 12.066,17.429 C12.066,16.381 12.347,15.399 12.839,14.555 C15.656,18.013 19.868,20.287 24.616,20.527 C24.518,20.108 24.469,19.673 24.469,19.224 C24.469,16.069 27.027,13.51 30.182,13.51 C31.826,13.51 33.309,14.204 34.353,15.314 C35.656,15.058 36.876,14.584 37.983,13.927 C37.553,15.262 36.65,16.381 35.467,17.089 C36.624,16.951 37.728,16.645 38.749,16.19 C37.987,17.334 37.018,18.341 35.901,19.144 Z" id="Shape" />
          </g>
        </g>
      </g>
    </svg>
  );
};

export const LoadingIcon = () => (
  <svg
    version="1.1"
    id="loader-1"
    xmlns="http://www.w3.org/2000/svg"
    width="40px"
    height="40px"
    viewBox="0 0 50 50"
  >
    <path fill="#28A08A" d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z">
      <animateTransform
        attributeType="xml"
        attributeName="transform"
        type="rotate"
        from="0 25 25"
        to="360 25 25"
        dur="0.6s"
        repeatCount="indefinite"
      />
    </path>
  </svg>
);


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

Marker.propTypes = generalProptypes;
Marker.defaultProps = defaultProptypes;

Search.propTypes = generalProptypes;
Search.defaultProps = defaultProptypes;

Facebook.propTypes = generalProptypes;
Facebook.defaultProps = defaultProptypes;

Google.propTypes = generalProptypes;
Google.defaultProps = defaultProptypes;

Instagram.propTypes = generalProptypes;
Instagram.defaultProps = defaultProptypes;

Twitter.propTypes = generalProptypes;
Twitter.defaultProps = defaultProptypes;