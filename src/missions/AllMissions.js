import React from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import Mission from './Mission';
import styles from './AllMissions.module.css';

const AllMissions = () => {
  const missions = useSelector((state) => state.missions);

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
              reserved={item.reserved}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default AllMissions;
