import React, { Component } from 'react';
import { connect } from 'react-redux';

import './index.css';

import helpers from './../../utils/helpers';

class Users extends Component {
  componentDidMount() {
    console.log('USERS QUERY:', this.props.query);
  }

  componentWillReceiveProps(nextProps) {
    const { query } = this.props;
    if (helpers.cleanQuery(nextProps.location.search) !== query) {
      console.log('FETCH NEW USERS HERE');
    }
  }

  render() {
    return (
      <section className="Users container">
        <h1>Put Users here</h1>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    query: state.search.query,
  };
}

export default connect(mapStateToProps)(Users);
