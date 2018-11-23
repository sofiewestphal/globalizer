import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';
import CreateProfileForm from './CreateProfileForm';
import { Close } from '../../assets/icons/icons';

const CreateProfileModal = (props) => {
  const { visible, handleVisibility } = props;
  const modalClass = visible ? 'modal visible' : 'modal';
  return (
    <div className={modalClass}>
      <div className="row modal_inner">
        <div className="col-sx-12 modal_inner--top">
          <h1>Create profile</h1>
          <button className="closeBtn" type="button" onClick={() => handleVisibility()}>
            <Close
              iconClassName="close"
              width="20px"
              height="20px"
              strokeColour="#242424"
            />
          </button>
        </div>
        <CreateProfileForm />
      </div>
    </div>
  );
};

CreateProfileModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  handleVisibility: PropTypes.func.isRequired,
};


export default CreateProfileModal;
