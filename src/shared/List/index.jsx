import React from 'react';

import './index.css';

const List = ({ items, children }) => {
  return <ul className="List">{items.map(children)}</ul>;
};

export default List;
