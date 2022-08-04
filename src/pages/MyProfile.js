import React from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import styles from './MyProfile.module.css';

const MyProfile = () => {
  const missions = useSelector((state) => state.missions);
  const joinedMissions = missions.filter((mission) => mission.reserved);

  return (
    <div className={styles.page}>
      <div className={styles.segment}>
        <h2>My Missions</h2>
        <table>
          <tbody>
            {joinedMissions.map((mission) => (
              <tr key={uuidv4()}>
                <td>
                  {' '}
                  {mission.name}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Rockets div */}
      <div className="rockets" />
    </div>
  );
};
export default MyProfile;
