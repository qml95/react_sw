import React from 'react';
import { MainNavItem } from './MainNavItem';

export const MainNav = ({ navItems }) => {
  function renderNav(navItems) {
    return navItems.map(
      (navItem, index) => (
        <li key={index}>
          <MainNavItem
            nat={navItem.nat}
            text={navItem.text}
          />
        </li>
      )
    )
  }

  return (
    <nav className='nav'>
      <ul className='main-nav'>
        {
          renderNav(navItems)
        }
      </ul>
    </nav>
  );
}
