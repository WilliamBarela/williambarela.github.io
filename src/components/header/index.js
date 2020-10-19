import React, { Component } from 'react';
import wbLogo from '../../img/wb-dark.svg';
import hamburger from '../../img/hamburger-light.svg';
import close from '../../img/close.svg';


const MenuIcon = () => {
  return(
    <img src={hamburger} alt="Main Menu" id="hamburger" />
  )
};

const CloseIcon = () => {
  return(
    <img src={close} alt="Close" id="close" />
  )
};


class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: {
        display: true
      },
      primaryNav: {
        display: false,
        style: ""
      }
    }
  }

  handleMenuClick = (e) => {
    e.preventDefault();
    const menuDisplay = !this.state.menu.display;
    const primaryNavStyle = (this.state.primaryNav.style === "") ? "show-primary-nav" : "";

    this.setState(
      {
        ...this.state,
        menu: {
          ...this.state.menu,
          display: menuDisplay
        },
        primaryNav: {
          ...this.state.primaryNav,
          style: primaryNavStyle
        }
      }
    );
  }

  render() {
    return (
      <header>
      <nav id="top-nav">
          <a href="/">
            <img src={wbLogo} alt="William Barela Logo" id="wb-logo" />
          </a>
          <div id="primary-navegation" className={this.state.primaryNav.style}>
            <ul className="primary-navegation-content">
              <li><a href="">about</a></li>
              <li><a href="">projects</a></li>
              <li><a href="">skills</a></li>
              <li><a href="">blog</a></li>
            </ul>
          </div>
          <a href="#" onClick={this.handleMenuClick}>
            { this.state.menu.display ? <MenuIcon /> : <CloseIcon />}
          </a>
        </nav>
      </header>
    )
  }
}

export default Header;
