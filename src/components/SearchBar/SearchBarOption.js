import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';
import arrowIcon from '../../assets/Images/other_icons/arrow_icon.svg';

const SearchBarOption = (props) => {
  const { title, active, handleClick } = props;
  const pClassName = active ? 'searchBarOption active' : 'searchBarOption';

  return(
    <div
      className="searchBarOptionContainer"
      onClick={() => handleClick(title)}
    >
      <p className={pClassName}>
        {title}
        <span>
          <img src={arrowIcon} alt="arrow down" />
        </span>
      </p>
    </div>
  );
};

SearchBarOption.propTypes = {
  title: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default SearchBarOption;
