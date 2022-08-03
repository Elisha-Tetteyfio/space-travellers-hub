import React from 'react';
import { useSelector } from 'react-redux';
import RocketsProfile from '../RocketSection/RocketsProfile';
// import reservedProfile1 from '../reduxStore/rockets';

function MyProfile() {
  const reservedRockets = useSelector((state) => state.rocket);
  const selectedOnes = reservedRockets.filter((rocket) => rocket.reserved === true);

  return (
    <div>
      <div className="Reserved">
        <h4>My Rockets</h4>
        <ul>
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
