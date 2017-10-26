import React, { Component } from 'react';
import { connect } from 'react-redux';

import './index.css';

import search from './../../modules/search';

import helpers from './../../utils/helpers';

class Overview extends Component {
  state = {
    loading: false,
  };

  componentDidMount() {
    console.log('ALL QUERY:', this.props.query);

    const { tracks, users, playlists } = this.props;

    if (tracks.length === 0 || playlists.length === 0 || users.length === 0) {
      if (!this.state.loading) {
        this.fetchData();
      }
    }
  }

  fetchData = async () => {
    const { query, searchTracks, searchPlaylists, searchUsers } = this.props;

    this.setState({ loading: true });

    await Promise.all([
      searchTracks(query),
      searchPlaylists(query),
      searchUsers(query),
    ]);

    this.setState({ loading: false });
  };

  componentWillReceiveProps(nextProps) {
    const { query } = this.props;
    if (helpers.cleanQuery(nextProps.location.search) !== query) {
      console.log('FETCH NEW RESULTS HERE');
    }
  }

  render() {
    if (this.state.loading) {
      return <h1>Loading...</h1>;
    }

    return (
      <section className="Overview container">
        <h1>Put last results here</h1>
      </section>
    );
  }
}

function mapStateToProps(state) {
  const trackIds = state.tracks.last;
  const playlistIds = state.playlists.last;
  const userIds = state.users.last;

  return {
    query: state.search.query,
    tracks: trackIds.map(id => state.tracks.entities[id]),
    playlists: playlistIds.map(id => state.playlists.entities[id]),
    users: userIds.map(id => state.users.entities[id]),
  };
}

export default connect(mapStateToProps, {
  searchTracks: search.actions.searchTracks,
  searchPlaylists: search.actions.searchPlaylists,
  searchUsers: search.actions.searchUsers,
})(Overview);
