import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getMissions } from '../redux/missions/reduxmission';
import MissionItem from './Misssion';

const Missions = () => {
  const missions = useSelector((state) => state.mission);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMissions());
  }, [dispatch]);

  return (
    <div>
      <ul>
        {
          missions.map((mission) => (
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
