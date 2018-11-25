import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';
import Dropdown from './Dropdown';
import { Arrow } from '../../assets/icons/icons';

const SearchBarOption = (props) => {
  const {
    title, active, optionTitle, options, handleClick, handleSelection,
  } = props;
  const pClassName = active ? 'searchBarOption active' : 'searchBarOption';

  return (
    <div className="searchBarOptionContainer">
      <button
        type="button"
        onClick={() => handleClick(optionTitle)}
      >
        <p className={pClassName}>
          {title}
          <span>
            <Arrow
              iconClassName="optionArrow"
              width="8px"
              height="5px"
              strokeColour="#fefefe"
            />
          </span>
        </p>
      </button>
      <Dropdown
        title={title}
        shown={active}
        options={options}
        handleClick={handleSelection}
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
  handleSelection: PropTypes.func.isRequired,
};

SearchBarOption.defaultProps = {
  options: false,
};

export default SearchBarOption;
