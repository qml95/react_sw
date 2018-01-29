import React, { Component } from 'react';
import { MainNav } from './MainNav';


class Header extends Component {
  render() {
    return (
      <div className='header'>
        <h1 className='header__title'>
          Star Wars
        </h1>
        <MainNav
          navItems={this.props.navItems}
        />
      </div>
    );
  }
}

export default Header;
