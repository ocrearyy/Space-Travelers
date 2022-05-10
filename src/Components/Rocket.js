import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { reserveButton } from '../redux/Rockets/reduxrocket';

const RocketItem = (props) => {
  const { rocket } = props;
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state);
  

  return (
    <div>
      <div>
        <img src={rocket.flickr_images[0]} />
      </div>
      <div>
        <button type="button">Reserved</button>
        <h1>{rocket.rocket_name}</h1>
        <p>{rocket.description}</p>
        <button type="button" className="show" onClick={() => { dispatch(reserveButton(rocket.id)); }}>ReservedButton</button>
      </div>

    </div>
  );
};

export default RocketItem;
