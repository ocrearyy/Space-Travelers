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
      <table>
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th label="Empty" />
          </tr>
        </thead>
        <tbody>
          {
          missions.map((mission) => (
            <MissionItem
              key={mission.mission_id}
              mission={mission}
            />
          ))
      }
        </tbody>
      </table>
    </div>
  );
};

export default Missions;
