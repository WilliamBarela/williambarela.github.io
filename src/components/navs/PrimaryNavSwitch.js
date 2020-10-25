import React from 'react';

import MenuIcon from '../icons/MenuIcon';
import CloseIcon from '../icons/CloseIcon';

function PrimaryNavSwitch(props) {
  return(
    <a href="#" onClick={props.handleMenuClick}>
      { props.menu.display ? <MenuIcon /> : <CloseIcon />}
    </a>
  )
}

export default PrimaryNavSwitch;
