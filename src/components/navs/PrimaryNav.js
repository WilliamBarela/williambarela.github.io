import React from 'react';

function PrimaryNav(props) {
  return(
    <div id="primary-navegation" className={props.primaryNav.style}>
      <ul className="primary-navegation-content">
        <li><a href="">about</a></li>
        <li><a href="">projects</a></li>
        <li><a href="">skills</a></li>
        <li><a href="/devblog">blog</a></li>
      </ul>
    </div>
  )
}

export default PrimaryNav;
