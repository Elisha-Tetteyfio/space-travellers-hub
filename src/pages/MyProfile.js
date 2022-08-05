import React from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import styles from './MyProfile.module.css';
import RocketsProfile from '../RocketSection/RocketsProfile';

const MyProfile = () => {
  const missions = useSelector((state) => state.missions);
  const joinedMissions = missions.filter((mission) => mission.reserved);
  const reservedRockets = useSelector((state) => state.rocket);
  const selectedOnes = reservedRockets.filter((rocket) => rocket.reserved === true);

  return (
    <>
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
        <div className={styles.segment}>
          <h2>My Rockets</h2>
          <table>
            <tbody>
              {selectedOnes.map((mission) => (
                <tr key={uuidv4()}>
                  <td>
                    <RocketsProfile
                      name={mission.name}
                      reserved={mission.reserved}
                    />
                    {' '}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
export default MyProfile;
