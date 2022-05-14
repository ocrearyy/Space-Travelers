import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import RocketItem from './Rocket';
import { getRockets } from '../redux/Rockets/reduxrocket';

const RocketsList = () => {
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRockets());
  }, [dispatch]);
  return (
    <div className="rocketWrap">
      <ul>
        {typeof (rockets) === 'string' ? <p>{rockets}</p> : rockets.map((rocket) => (
          <RocketItem
            key={rocket.id}
            rocket={rocket}
          />
        ))}
      </ul>
    </div>
  );
};

export default RocketsList;
