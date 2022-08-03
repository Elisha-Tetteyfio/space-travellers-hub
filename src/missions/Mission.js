import React from 'react';

/* eslint-disable react/prop-types */
function Mission({ name, id, description }) {
  return (
    <li id={id}>
      <div>{name}</div>
      <div>{description}</div>
      <div><button type="button">Status</button></div>
      <div><button type="button">Join Mission</button></div>
    </li>
  );
}

export default Mission;
