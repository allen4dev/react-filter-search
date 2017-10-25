import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import Overview from './../Overview';
import Tracks from './../Tracks';
import Playlists from './../Playlists';
import Users from './../Users';

import Menu from './../../shared/Menu';

import './index.css';

class Results extends Component {
  render() {
    return (
      <div className="Results">
        <Menu />

        <Route exact path="/" component={Overview} />
        <Route path="/tracks" component={Tracks} />
        <Route path="/playlists" component={Playlists} />
        <Route path="/users" component={Users} />
      </div>
    );
  }
}

export default connect()(Results);
