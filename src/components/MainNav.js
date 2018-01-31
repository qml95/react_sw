import React from 'react';
import { MainNavItem } from './MainNavItem';

export const MainNav = ({ navItems }) => {
  function renderNav(navItems) {
    return navItems.map(
      (navItem, index) => (
        <li key={index}>
          <MainNavItem
            page={navItem.page}
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
