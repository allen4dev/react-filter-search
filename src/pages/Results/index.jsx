import React, { Component } from 'react';

import { connect } from 'react-redux';

import playlists from './../../modules/playlists';

class Results extends Component {
  fetchData = async () => {
    await this.props.searchPlaylists('anime');
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
  searchPlaylists: playlists.actions.searchPlaylists,
})(Results);
