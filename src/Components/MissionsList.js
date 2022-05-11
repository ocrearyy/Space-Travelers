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
          {typeOf (missions) === 'string' ? <p>{missions}</p> : missions.map((mission) => (
          <MissionItem
            key={mission_id}
            mission={mission}
          />
        ))
      }
      </ul>
    </div>
  );
};

export default Missions;
