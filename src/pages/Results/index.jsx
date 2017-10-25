import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, NavLink } from 'react-router-dom';

class Results extends Component {
  render() {
    return (
      <div className="Results">
        <nav>
          <NavLink to="/">All</NavLink>
          <NavLink to="/tracks">Tracks</NavLink>
          <NavLink to="/playlists">Playlists</NavLink>
          <NavLink to="/users">Users</NavLink>
        </nav>

        <Route exact path="/" render={() => <h1>Overview</h1>} />
        <Route path="/tracks" render={() => <h1>Tracks</h1>} />
        <Route path="/playlists" render={() => <h1>Playlists</h1>} />
        <Route path="/users" render={() => <h1>Users</h1>} />
      </div>
    );
  }
}

export default connect()(Results);
