import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';
import { Close } from '../../assets/icons/icons';

const Modal = (props) => {
  const {
    visible, handleVisibility, title, innerModalClass, children,
  } = props;
  const modalClass = visible ? 'modal visible' : 'modal';
  return (
    <div className={modalClass}>
      <div className={innerModalClass}>
        <div className="col-sx-12 modal_inner--top">
          <h1>{title}</h1>
          <button className="closeBtn" type="button" onClick={() => handleVisibility()}>
            <Close
              iconClassName="close"
              width="20px"
              height="20px"
              strokeColour="#242424"
            />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

Modal.propTypes = {
  innerModalClass: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  visible: PropTypes.bool.isRequired,
  handleVisibility: PropTypes.func.isRequired,
};


export default Modal;
