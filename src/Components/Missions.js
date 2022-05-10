import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getMissions } from '../redux/missions/reduxmission';
import MissionItem from './Misssion';

const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions);
  useEffect(() => {
    dispatch(getMissions());
  }, [dispatch]);

  return (
    <div>
      <ul>
        {
        missions.map((mission) => (
          // mission.mission_id.splice.join(',').find((element) => element === Number),
          <MissionItem
            key={mission.mission_id}
            mission={mission}
          />
        ))
      }
      </ul>
    </div>
  );
};

export default Missions;
