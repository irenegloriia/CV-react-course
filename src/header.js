import React, { useState } from 'react';
import { Profile } from './pages';
import { Link } from 'react-router-dom';




const Header = () => {
  const listMenu = ['Home', 'About', 'Resume'];

  return (
    <div className="main-header">
      {listMenu.map((name) => {
        return (
          <Link to={`/${name}`} key={name}>
            <div className="menu">{name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Header;
