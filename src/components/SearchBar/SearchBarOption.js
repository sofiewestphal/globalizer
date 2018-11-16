import React from 'react';
import './index.scss';
import arrowIcon from '../../assets/Images/other_icons/arrow_icon.svg';

const SearchBarOption = (props) => {
  const { title } = props;
  return(
    <div>
      <p>
        {title}
        <span>
          <img src={arrowIcon} alt="arrow down" />
        </span>
      </p>
    </div>
  );
};

export default SearchBarOption;
