import React from 'react';

function Mission({ missionName, missionId, description }) {
  return (
    <li key={missionId}>
      <div>{missionName}</div>
      <div>{description}</div>
      <div><button type="button">Status</button></div>
      <div><button type="button">Join Mission</button></div>
    </li>
  );
}

export default Mission;
