import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';
import Dropdown from './Dropdown';
import { Arrow } from '../../assets/icons/icons';

const ActivityFormOption = (props) => {
  const {
    labelName,
    optionTitle,
    title,
    active,
    options,
    handleClick,
  } = props;
  const pClassName = active ? 'activityFormOption active' : 'activityFormOption';
  return (
    <div className="row">
      <div className="col-xs-12">
        <h4>{labelName}</h4>
        <div
          className="activityFormOptionContainer"
          role="button"
          onClick={() => handleClick(optionTitle)}
        >
          <p className={pClassName}>
            {title}
            <span>
              <Arrow
                iconClassName="optionArrow"
                width="8px"
                height="5px"
                strokeColour="#242424"
              />
            </span>
          </p>
          <Dropdown
            title={title}
            shown={active}
            options={options}
          />
        </div>
      </div>
    </div>
  );
};

ActivityFormOption.propTypes = {
  labelName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  optionTitle: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  options: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool,
  ]),
  handleClick: PropTypes.func.isRequired,
};

ActivityFormOption.defaultProps = {
  options: false,
};

export default ActivityFormOption;
