import React from 'react';
import { NavLink } from 'react-router-dom';

import './index.css';

const Menu = () => {
  return (
    <nav className="Menu">
      <NavLink to="/" className="Menu-link" activeClassName="Menu-link--active">
        All
      </NavLink>
      <NavLink
        to="/tracks"
        className="Menu-link"
        activeClassName="Menu-link--active">
        Tracks
      </NavLink>
      <NavLink
        to="/playlists"
        className="Menu-link"
        activeClassName="Menu-link--active">
        Playlists
      </NavLink>
      <NavLink
        to="/users"
        className="Menu-link"
        activeClassName="Menu-link--active">
        Users
      </NavLink>
    </nav>
  );
};

export default Menu;
