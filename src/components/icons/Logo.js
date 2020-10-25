import React from 'react';
import wbLogo from '../../img/wb-dark.svg';

function Logo() {
  return(
    <a href="/">
      <img src={wbLogo} alt="William Barela Logo" id="wb-logo" />
    </a>
  )
}

export default Logo;
