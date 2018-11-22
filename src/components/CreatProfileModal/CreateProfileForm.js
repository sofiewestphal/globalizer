import React from 'react';
import './index.scss';
import MainButton from '../MainButton';

const CreateProfileForm = () => (
  <div className="container-fluid formContainer">
    <div className="row">
      <div className="col-sx-12 col-md-8">Form</div>
      <div className="col-sx-12 col-md-4">
        <MainButton
          text="Create profile"
        />
      </div>
    </div>
  </div>
);


export default CreateProfileForm;
