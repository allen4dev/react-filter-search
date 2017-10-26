import React, { Component } from 'react';
import { connect } from 'react-redux';

import Playlist from './../../modules/playlists/components/Set';

import List from './../../shared/List';

import './index.css';

import search from './../../modules/search';

class Playlists extends Component {
  componentDidMount() {
    const { query, items, isFetching } = this.props;

    if (items.length === 0 && !isFetching) {
      this.fetchData(query);
    }
  }

  componentWillReceiveProps(nextProps) {
    const { query } = this.props;
    if (nextProps.query !== query) {
      this.fetchData(nextProps.query);
    }
  }

  fetchData = async query => {
    const { searchPlaylists } = this.props;
    await searchPlaylists(query);
  };

  searchNext = async () => {
    const { searchPlaylistsNextPage } = this.props;

    await searchPlaylistsNextPage();
  };

  renderItem = item => {
    return <Playlist key={item.id} {...item} />;
  };

  render() {
    return (
      <section className="Playlists container">
        <List items={this.props.items}>{this.renderItem}</List>
        {this.props.isFetching && <h1 className="Loading">Loading...</h1>}
        <button onClick={this.searchNext}>Search more</button>
      </section>
    );
  }
}

function mapStateToProps(state) {
  const ids = state.search.playlists.results;
  const isFetching = state.search.playlists.fetching;

  return {
    isFetching,
    query: state.search.query,
    items: ids.map(id => state.playlists.entities[id]),
  };
}

export default connect(mapStateToProps, {
  searchPlaylists: search.actions.searchPlaylists,
  searchPlaylistsNextPage: search.actions.searchPlaylistsNextPage,
})(Playlists);
