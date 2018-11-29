import React from 'react';
import './index.scss';
import {
  Facebook, Google, Instagram, Twitter,
} from '../../assets/icons/icons';

const Footer = () => (
  <div className="container-fluid footerContainer">
    <div className="row">
      <div className="col-xs-12 col-sm-6 col-sm-offset-1">
        <h2>Dont be shy - send a bird or drop a hello</h2>
        <p>hello@globalizer.dk</p>
        <p>+ 45 11 22 33 44</p>
      </div>
      <div className="col-xs-12 col-sm-4">
        <div className="socialContainer">
          <Facebook
            height="30px"
            width="30px"
            strokeColour="#fefefe"
            iconClassName="socialIcon"
          />
          <Instagram
            height="30px"
            width="30px"
            strokeColour="#fefefe"
            iconClassName="socialIcon"
          />
          <Google
            height="30px"
            width="30px"
            strokeColour="#fefefe"
            iconClassName="socialIcon"
          />
          <Twitter
            height="30px"
            width="30px"
            strokeColour="#fefefe"
            iconClassName="socialIcon"
          />
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
