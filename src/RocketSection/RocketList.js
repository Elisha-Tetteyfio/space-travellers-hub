import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllRocketsAsync } from '../reduxStore/rockets';
import Rocket from './Rocket';

function RocketList() {
  const dispatch = useDispatch();
  const rocketTest = useSelector((state) => state.rocket);
  useEffect(() => {
    dispatch(getAllRocketsAsync());
  }, [dispatch]);
  return (
    <ul>
      {rocketTest.map((item) => (
        <Rocket
          Ximg={item.picha}
          title={item.name}
          maneno={item.des}
          key={Math.random() * 100}
        />
      ))}
    </ul>
  );
}

export default RocketList;
