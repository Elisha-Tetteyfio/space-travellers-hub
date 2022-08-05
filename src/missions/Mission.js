import React from 'react';
import { useDispatch } from 'react-redux';
import { joinMission, leaveMission } from '../reduxStore/missions';
import styles from './Mission.module.css';

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
      <th>{name}</th>
      <td>{description}</td>
      <td>
        {reserved && <p className={styles.member}>Active Member</p>}
        {!reserved && <p className={styles.notMember}>NOT A MEMBER</p>}
      </td>
      <td>
        {reserved && <div><button type="button" onClick={leave} className={styles.leaveBtn}>Leave Mission</button></div>}
        {!reserved && <div><button type="button" onClick={join} className={styles.joinBtn}>Join Mission</button></div>}
      </td>
    </tr>
  );
};

export default Mission;
