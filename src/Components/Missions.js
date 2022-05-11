import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getMissions } from '../redux/missions/reduxmission';
import MissionItem from './Misssion';

const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.mission);
  useEffect(() => {
    dispatch(getMissions());
  }, []);

  return (
    <div>
      <ul>
        {
        missions.map((element) => (
          <MissionItem
            key={element.mission_id}
            mission={element}
          />
        ))
      }
      </ul>
    </div>
  );
};

export default Missions;
