import React from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { joinMission, leaveMission } from '../reduxStore/missions';

/* eslint-disable react/prop-types */
const Mission = ({ name, id, description }) => {
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
      <td><button type="button" onClick={leave}>Status</button></td>
      <td>
        <button type="button" onClick={join}>Join Mission</button>
      </td>
    </tr>
  );
};

export default Mission;
