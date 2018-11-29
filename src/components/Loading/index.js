import React from 'react';
import './index.scss';
import { LoadingIcon } from '../../assets/icons/icons';

const Loading = () => (
  <div className="container-fluid loadingContainer">
    <div className="row">
      <LoadingIcon />
    </div>
  </div>
);

export default Loading;
