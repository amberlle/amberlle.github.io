import React, { useState } from 'react';
import {
    Link
  } from "react-router-dom";
import {CallMade} from '@material-ui/icons';
var classNames = require('classnames');

function FbInternship() {
  const [hidden, setHidden] = useState(true);

  function handleClick() {
    setHidden(false);
    var textField = document.createElement('textarea');
    textField.innerText = "bianca.lee@berkeley.edu";
    document.body.appendChild(textField);
    textField.select();
    document.execCommand('copy');
    textField.remove()
    const element = document.querySelector('.copied-text');
    element.classList.add('animate__animated', 'animate__slideOutDown');
    setTimeout(() => setHidden(true), 5000);
  };

  return (
<div className="contact-wrapper" data-rellax-zindex="5">
          <div className="find-me-on-wrapper">
            <div class="row">
            <div class="column">
              <div className="connected">
              Let's get connected.
            </div>
            </div>
          <div class="column">
            <div className="footer-links-wrapper">
            <a href="https://www.linkedin.com/in/amberle0814/" className="link-text" target="_blank">LinkedIn</a>
            <a href="https://www.instagram.com/xmberle/" className="link-text" target="_blank">Instagram</a>
            <a href="mailto:alle0814@berkeley.edu" className="link-text" target="_blank">Email</a>
            </div>
            </div>
          </div>
          </div>
        </div>
  );
}

export default FbInternship;
