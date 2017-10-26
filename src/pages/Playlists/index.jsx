import React, { Component } from 'react';
import { connect } from 'react-redux';

import './index.css';

import search from './../../modules/search';

import helpers from './../../utils/helpers';

class Playlists extends Component {
  componentDidMount() {
    const { items } = this.props;

    if (items.length === 0) {
      this.fetchData();
    }
  }

  componentWillReceiveProps(nextProps) {
    const { query } = this.props;
    if (helpers.cleanQuery(nextProps.location.search) !== query) {
      console.log('FETCH NEW PLAYLISTS HERE');
    }
  }

  fetchData = async () => {
    const { query, searchPlaylists } = this.props;
    await searchPlaylists(query);
  };

  render() {
    if (this.props.isFetching) {
      return <h1 className="Loading">Loading...</h1>;
    }

    return (
      <section className="Playlists container">
        <h1>Put Playlists here</h1>
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
})(Playlists);
