import React, { Component } from 'react';

import Logo from '../icons/Logo';
import PrimaryNav from '../navs/PrimaryNav';
import PrimaryNavSwitch from '../navs/PrimaryNavSwitch';



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
          <Logo />
          <PrimaryNav
            primaryNav={this.state.primaryNav}
          />
          <PrimaryNavSwitch
            handleMenuClick={this.handleMenuClick}
            menu={this.state.menu}
          />
        </nav>
      </header>
    )
  }
}

export default Header;
