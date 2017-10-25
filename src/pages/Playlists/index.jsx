import React, { Component } from 'react';
import { connect } from 'react-redux';

import './index.css';

import helpers from './../../utils/helpers';

class Playlists extends Component {
  componentDidMount() {
    console.log('PLAYLISTS QUERY:', this.props.query);
  }

  componentWillReceiveProps(nextProps) {
    const { query } = this.props;
    if (helpers.cleanQuery(nextProps.location.search) !== query) {
      console.log('FETCH NEW PLAYLISTS HERE');
    }
  }

  render() {
    return (
      <section className="Playlists container">
        <h1>Put Playlists here</h1>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    query: state.search.query,
  };
}

export default connect(mapStateToProps)(Playlists);
