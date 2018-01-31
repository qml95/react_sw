import React from 'react';
import { NavLink } from 'react-router-dom';

export const MainNavItem = ({ page, text }) => {
  return (
    <NavLink to={page}>
      {text}
    </NavLink>
  );
};
