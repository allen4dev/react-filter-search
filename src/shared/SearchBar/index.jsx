import React from 'react';

import './index.css';

const SearchBar = ({ placeholder, value, handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className="SearchBar">
      <input
        className="SearchBar-input"
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </form>
  );
};

export default SearchBar;
