import React from 'react';
import { NavLink } from 'react-router-dom';

import './index.css';

const Menu = ({ query }) => {
  return (
    <nav className="Menu">
      <NavLink
        to={{
          pathname: `/results/all`,
          search: `q=${query}`,
        }}
        className="Menu-link"
        activeClassName="Menu-link--active">
        All
      </NavLink>
      <NavLink
        to={{
          pathname: `/results/tracks`,
          search: `q=${query}`,
        }}
        className="Menu-link"
        activeClassName="Menu-link--active">
        Tracks
      </NavLink>
      <NavLink
        to={{
          pathname: `/results/playlists`,
          search: `q=${query}`,
        }}
        className="Menu-link"
        activeClassName="Menu-link--active">
        Playlists
      </NavLink>
      <NavLink
        to={{
          pathname: `/results/users`,
          search: `q=${query}`,
        }}
        className="Menu-link"
        activeClassName="Menu-link--active">
        Users
      </NavLink>
    </nav>
  );
};

export default Menu;
