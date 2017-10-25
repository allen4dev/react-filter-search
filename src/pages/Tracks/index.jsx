import React, { Component } from 'react';

import { connect } from 'react-redux';

import './index.css';

import tracks from './../../modules/tracks';
import helpers from './../../utils/helpers';

class Tracks extends Component {
  componentDidMount() {
    console.log('TRACKS QUERY:', this.props.query);
    const { items } = this.props;

    if (items.length === 0) {
      this.fetchData();
    }
  }

  componentWillReceiveProps(nextProps) {
    const { query } = this.props;
    if (helpers.cleanQuery(nextProps.location.search) !== query) {
      console.log('FETCH NEW TRACKS HERE');
    }
  }

  fetchData = async () => {
    const { query, searchTracks } = this.props;

    await searchTracks(query);
  };

  render() {
    if (this.props.isFetching) {
      return <h1 className="Loading">Loading...</h1>;
    }

    return (
      <section className="Tracks container">
        <h1>Put Tracks here</h1>
      </section>
    );
  }
}

function mapStateToProps(state) {
  const ids = state.tracks.results;
  const isFetching = state.tracks.fetching;

  return {
    isFetching,
    query: state.search.query,
    items: ids.map(id => state.tracks.entities[id]),
  };
}

export default connect(mapStateToProps, {
  searchTracks: tracks.actions.searchTracks,
})(Tracks);
