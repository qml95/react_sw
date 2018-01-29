import React from 'react';
import { NavLink } from 'react-router-dom';

export const MainNavItem = ({ nat, text }) => {
  return (
    <NavLink to={nat}>
      {text}
    </NavLink>
  );
};
