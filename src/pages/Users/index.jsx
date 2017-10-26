import React, { Component } from 'react';
import { connect } from 'react-redux';

import User from './../../modules/users/components/User';

import List from './../../shared/List';

import './index.css';

import search from './../../modules/search';

class Users extends Component {
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
    const { searchUsers } = this.props;
    await searchUsers(query);
  };

  searchNext = async () => {
    const { query, searchUsersNextPage } = this.props;

    await searchUsersNextPage(query);
  };

  renderItem = item => {
    return <User key={item.id} {...item} />;
  };

  render() {
    return (
      <section className="Users container">
        <List items={this.props.items}>{this.renderItem}</List>
        {this.props.isFetching && <h1 className="Loading">Loading...</h1>}
        <button onClick={this.searchNext}>Search more</button>
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
  searchUsersNextPage: search.actions.searchUsersNextPage,
})(Users);
