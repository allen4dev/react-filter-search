import React, { Component } from 'react';

import { connect } from 'react-redux';

import './index.css';

import helpers from './../../utils/helpers';

class Tracks extends Component {
  componentDidMount() {
    console.log('TRACKS QUERY:', this.props.query);
  }

  componentWillReceiveProps(nextProps) {
    const { query } = this.props;
    if (helpers.cleanQuery(nextProps.location.search) !== query) {
      console.log('FETCH NEW TRACKS HERE');
    }
  }

  render() {
    return (
      <section className="Tracks container">
        <h1>Put Tracks here</h1>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    query: state.search.query,
  };
}

export default connect(mapStateToProps)(Tracks);
