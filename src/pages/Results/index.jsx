import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import Overview from './../Overview';
import Tracks from './../Tracks';
import Playlists from './../Playlists';
import Users from './../Users';

import SearchBar from './../../shared/SearchBar';
import Menu from './../../shared/Menu';

import './index.css';

import search from './../../modules/search';
import helpers from './../../utils/helpers';

class Results extends Component {
  state = {
    term: '',
  };

  componentDidMount() {
    const { location: { search }, setQuery } = this.props;
    const normalized = helpers.cleanQuery(search);

    if (normalized) {
      setQuery(normalized);
    }
  }

  handleChange = e => {
    const term = e.target.value;
    this.setState({ term });
  };

  handleSubmit = e => {
    e.preventDefault();
    let term = this.state.term;
    term = term.toLowerCase();

    const { history, match, query, setQuery } = this.props;
    const filter = match.params.filter || 'all';

    if (query !== term) {
      console.log('replacing');
      setQuery(term);

      history.push({
        pathname: `/results/${filter}`,
        search: `q=${term}`,
      });
    }

    this.setState({ term: '' });
  };

  renderRoutes() {
    const { match, query } = this.props;

    if (!match.params.filter || !query) {
      return <h1 className="message">Search something</h1>;
    }

    return (
      <div className="Results-content">
        <Route exact path="/results/all" component={Overview} />
        <Route path="/results/tracks" component={Tracks} />
        <Route path="/results/playlists" component={Playlists} />
        <Route path="/results/users" component={Users} />
      </div>
    );
  }

  render() {
    const { query } = this.props;

    return (
      <div className="Results container">
        <SearchBar
          placeholder="Search..."
          value={this.state.term}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />

        <Menu query={query} />

        {this.renderRoutes()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    query: state.search.query,
  };
}

export default connect(mapStateToProps, {
  setQuery: search.actions.setQuery,
})(Results);
