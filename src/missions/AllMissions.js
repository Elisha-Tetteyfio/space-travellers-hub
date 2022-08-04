import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { getMissions } from '../reduxStore/missions';
import Mission from './Mission';
import styles from './AllMissions.module.css';

function AllMissions() {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions);
  useEffect(() => {
    dispatch(getMissions());
  }, [dispatch]);

  return (
    <>
      <table>
        <tbody>
          <tr>
            <th className={styles.missionRow}>Mission</th>
            <th className={styles.desRow}>Description</th>
            <th className={styles.statusRow}>Status</th>
            <th className={styles.lastRow}> </th>
          </tr>
          {missions.map((item) => (
            <Mission
              key={uuidv4()}
              id={item.id}
              name={item.name}
              description={item.description}
            />
          ))}
        </tbody>
      </table>
    </>
  );
}

export default AllMissions;
