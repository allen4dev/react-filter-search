import React, { Component } from 'react';

import { connect } from 'react-redux';

import users from './../../modules/users';

class Results extends Component {
  fetchData = async () => {
    await this.props.searchUsers('anime');
  };

  render() {
    return (
      <div className="Results">
        <h1>Results here</h1>
        <button onClick={this.fetchData}>Fetch Data</button>
      </div>
    );
  }
}

export default connect(null, {
  searchUsers: users.actions.searchUsers,
})(Results);
