import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMissions } from '../reduxStore/missions';
import Mission from './Mission';

function AllMissions() {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions);
  useEffect(() => {
    dispatch(getMissions());
  }, [dispatch]);

  return (
    <ul>
      <div>Mission</div>
      <div>Description</div>
      <div>Status</div>
      <div />
      {missions.map((item) => (
        <Mission
          missionName={item.mission_name}
          missionId={item.mission_id}
          description={item.description}
          key={item.mission_id}
        />
      ))}
    </ul>
  );
}

export default AllMissions;
