import React from 'react';

import defaultImage from './../../../default_image.png';

import './index.css';

const User = props => {
  const src = props.avatar_url || defaultImage;

  return (
    <li className="User">
      <div className="User-artwork imageContainer">
        <img src={src} alt={props.username} className="User-image" />
      </div>
      <div className="User-body">
        <h4 className="User-username">{props.username}</h4>
        <p className="User-title truncate">{props.first_name}</p>
      </div>
    </li>
  );
};

export default User;
