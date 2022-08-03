import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { getMissions } from '../reduxStore/missions';
import Mission from './Mission';

function AllMissions() {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions);
  useEffect(() => {
    dispatch(getMissions());
  }, [dispatch]);

  return (
    <>
      <div>Mission</div>
      <div>Description</div>
      <div>Status</div>
      <div />
      <ul>
        {missions.map((item) => (
          <Mission
            key={uuidv4()}
            id={item.id}
            name={item.name}
            description={item.description}
          />
        ))}
      </ul>
    </>
  );
}

export default AllMissions;
