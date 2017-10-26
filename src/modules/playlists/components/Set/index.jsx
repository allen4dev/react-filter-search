import React from 'react';

import defaultImage from './../../../default_image.png';

import './index.css';

const Set = props => {
  const src = props.artwork_url || defaultImage;

  return (
    <li className="Set">
      <div className="Set-artwork imageContainer">
        <img src={src} alt={props.title} className="Set-image" />
      </div>
      <div className="Set-body">
        <p className="Set-username">{props.user.username}</p>
        <h4 className="Set-title truncate">{props.title}</h4>
      </div>
    </li>
  );
};

export default Set;
