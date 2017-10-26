import React, { Component } from 'react';
import { connect } from 'react-redux';

import './index.css';

import search from './../../modules/search';

import helpers from './../../utils/helpers';

class Users extends Component {
  componentDidMount() {
    console.log('USERS QUERY:', this.props.query);

    const { items } = this.props;

    if (items.length === 0) {
      this.fetchData();
    }
  }

  componentWillReceiveProps(nextProps) {
    const { query } = this.props;
    if (helpers.cleanQuery(nextProps.location.search) !== query) {
      console.log('FETCH NEW USERS HERE');
    }
  }

  fetchData = async () => {
    const { query, searchUsers } = this.props;

    await searchUsers(query);
  };

  render() {
    if (this.props.isFetching) {
      return <h1 className="Loading">Loading...</h1>;
    }

    return (
      <section className="Users container">
        <h1>Put Users here</h1>
      </section>
    );
  }
}

function mapStateToProps(state) {
  const ids = state.search.users.results;
  const isFetching = state.search.users.fetching;

  return {
    isFetching,
    query: state.search.query,
    items: ids.map(id => state.users.entities[id]),
  };
}

export default connect(mapStateToProps, {
  searchUsers: search.actions.searchUsers,
})(Users);
