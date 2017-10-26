import React, { Component } from 'react';
import { connect } from 'react-redux';

import User from './../../modules/users/components/User';
import Playlist from './../../modules/playlists/components/Set';
import Track from './../../modules/tracks/components/Track';

import List from './../../shared/List';

import './index.css';

import search from './../../modules/search';

class Overview extends Component {
  state = {
    loading: false,
  };

  componentDidMount() {
    const { query, tracks, users, playlists } = this.props;

    if (tracks.length === 0 || playlists.length === 0 || users.length === 0) {
      if (!this.state.loading) {
        this.fetchData(query);
      }
    }
  }

  componentWillReceiveProps(nextProps) {
    const { query } = this.props;
    if (nextProps.query !== query) {
      this.fetchData(nextProps.query);
    }
  }

  fetchData = async query => {
    const { searchTracks, searchPlaylists, searchUsers } = this.props;

    this.setState({ loading: true });

    await Promise.all([
      searchTracks(query),
      searchPlaylists(query),
      searchUsers(query),
    ]);

    this.setState({ loading: false });
  };

  renderTrack = item => {
    return <Track key={item.id} {...item} />;
  };

  renderPlaylist = item => {
    return <Playlist key={item.id} {...item} />;
  };

  renderUser = item => {
    return <User key={item.id} {...item} />;
  };

  render() {
    if (this.state.loading) {
      return <h1>Loading...</h1>;
    }

    return (
      <section className="Overview container">
        <List items={this.props.tracks}>{this.renderTrack}</List>
        <List items={this.props.playlists}>{this.renderPlaylist}</List>
        <List items={this.props.users}>{this.renderUser}</List>
      </section>
    );
  }
}

function mapStateToProps(state) {
  const trackIds = state.search.tracks.last;
  const playlistIds = state.search.playlists.last;
  const userIds = state.search.users.last;

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
