import React, { Component } from 'react';
import { connect } from 'react-redux';

import './index.css';

import helpers from './../../utils/helpers';

class Overview extends Component {
  componentDidMount() {
    console.log('ALL QUERY:', this.props.query);
  }

  componentWillReceiveProps(nextProps) {
    const { query } = this.props;
    if (helpers.cleanQuery(nextProps.location.search) !== query) {
      console.log('FETCH NEW RESULTS HERE');
    }
  }

  render() {
    return (
      <section className="Overview container">
        <h1>Put last results here</h1>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    query: state.search.query,
  };
}

export default connect(mapStateToProps)(Overview);
