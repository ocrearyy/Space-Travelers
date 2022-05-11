import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getMissions } from '../redux/missions/reduxmission';
import MissionItem from './Misssion';

const Missions = () => {
  const missions = useSelector((state) => state.missions);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMissions());
  }, [dispatch]);

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
