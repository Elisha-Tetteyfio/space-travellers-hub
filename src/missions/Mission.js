import React from 'react';

/* eslint-disable react/prop-types */
function Mission({ name, id, description }) {
  return (
    <tr id={id}>
      <td>{name}</td>
      <td>{description}</td>
      <td><button type="button">Status</button></td>
      <td><button type="button">Join Mission</button></td>
    </tr>
  );
}

export default Mission;
