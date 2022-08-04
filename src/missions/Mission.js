import React from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { joinMission, leaveMission } from '../reduxStore/missions';

/* eslint-disable react/prop-types */
const Mission = (mission) => {
  const {
    name, id, description, reserved,
  } = mission;
  const dispatch = useDispatch();

  const join = () => {
    dispatch(joinMission(id));
  };

  const leave = () => {
    dispatch(leaveMission(id));
  };

  return (
    <tr id={id}>
      <td>{name}</td>
      <td>{description}</td>
      <td>
        {reserved && <p type="button">Active Member</p>}
        {!reserved && <p type="button">NOT A MEMBER</p>}
      </td>
      <td>
        {reserved && <button type="button" onClick={leave}>Leave Mission</button>}
        {!reserved && <button type="button" onClick={join}>Join Mission</button>}
      </td>
    </tr>
  );
};

export default Mission;
