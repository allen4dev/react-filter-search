import React, { Component } from 'react';

import { connect } from 'react-redux';

import tracks from './../../modules/tracks';

class Results extends Component {
  fetchData = async () => {
    await this.props.searchTracks('fripSide');
  };

  render() {
    return (
      <div className="Results">
        <h1>Results here</h1>
        <button onClick={this.fetchData}>Fetch Data</button>
      </div>
    );
  }
}

export default connect(null, {
  searchTracks: tracks.actions.searchTracks,
})(Results);
