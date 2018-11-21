import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';
import arrowIcon from '../../assets/icons/other_icons/arrow_icon.svg';
import Dropdown from './Dropdown';

const SearchBarOption = (props) => {
  const {
    title, active, optionTitle, options, handleClick,
  } = props;
  const pClassName = active ? 'searchBarOption active' : 'searchBarOption';

  return (
    <div
      className="searchBarOptionContainer"
      role="button"
      onClick={() => handleClick(optionTitle)}
    >
      <p className={pClassName}>
        {title}
        <span>
          <img src={arrowIcon} alt="arrow down" />
        </span>
      </p>
      <Dropdown
        title={title}
        shown={active}
        options={options}
      />
    </div>
  );
};

SearchBarOption.propTypes = {
  title: PropTypes.string.isRequired,
  optionTitle: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  options: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool,
  ]),
  handleClick: PropTypes.func.isRequired,
};

SearchBarOption.defaultProps = {
  options: false,
};

export default SearchBarOption;
