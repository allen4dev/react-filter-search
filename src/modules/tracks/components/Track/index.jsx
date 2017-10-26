import React from 'react';

import defaultImage from './../../../default_image.png';

import './index.css';

const Track = props => {
  const src = props.artwork_url || defaultImage;

  return (
    <li className="Track">
      <div className="Track-artwork imageContainer">
        <img src={src} alt={props.title} className="Track-image" />
      </div>
      <div className="Track-body">
        <p className="Track-username">{props.user.username}</p>
        <h4 className="Track-title truncate">{props.title}</h4>
      </div>
    </li>
  );
};

export default Track;
