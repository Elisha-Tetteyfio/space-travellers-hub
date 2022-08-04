import React from 'react';
import { useSelector } from 'react-redux';
import RocketsProfile from '../RocketSection/RocketsProfile';
import styles from '../RocketSection/Rocket.module.css';
// import reservedProfile1 from '../reduxStore/rockets';

function MyProfile() {
  const reservedRockets = useSelector((state) => state.rocket);
  const selectedOnes = reservedRockets.filter((rocket) => rocket.reserved === true);

  return (
    <div>
      <div className={styles.Reserved}>
        <h2 className={styles.Hp}>My Rockets</h2>
        <ul className={styles.unordered}>
          {selectedOnes.map((item) => (
            <RocketsProfile
              name={item.name}
              reserved={item.reserved}
              key={Math.random() * 1000}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MyProfile;
