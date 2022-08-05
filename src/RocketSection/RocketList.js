import React from 'react';
import { useSelector } from 'react-redux';
import Rocket from './Rocket';
// import { getAllRocketsAsync } from '../reduxStore/rockets';

function RocketList() {
  // const dispatch = useDispatch();
  const rocketTest = useSelector((state) => state.rocket);
  // useEffect(() => {
  //   dispatch(getAllRocketsAsync());
  // }, [dispatch]);
  return (
    <ul>
      {rocketTest.map((item) => (
        <Rocket
          Ximg={item.picha}
          title={item.name}
          maneno={item.des}
          id={item.id}
          reservation={item.reserved}
          key={Math.random() * 100}
        />
      ))}
    </ul>
  );
}

export default RocketList;
