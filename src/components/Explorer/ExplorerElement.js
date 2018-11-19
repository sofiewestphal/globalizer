import React from 'react';
import PropTypes from 'prop-types';

const ExplorerElement = ({ category }) => (
  <div className="col-xs-12 col-sm-4">
    <div className="explorerElementContainer">
      <img src={category.src} alt={category.title} />
      <div className="textContainer">
        <h2>{category.title}</h2>
      </div>
    </div>
  </div>
);

ExplorerElement.propTypes = {
  category: PropTypes.object.isRequired,
};

export default ExplorerElement;
