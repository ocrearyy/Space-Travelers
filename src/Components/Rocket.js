import React from 'react';
import { useDispatch } from 'react-redux';
import { cancelButton, reserveButton } from '../redux/Rockets/reduxrocket';

const RocketItem = (props) => {
  const { rocket } = props;
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <img src={rocket.flickr_images[0]} />
      </div>
      <div>
        <h1>{rocket.rocket_name}</h1>
        <p>
          {rocket.reserved ? <span>Reserved</span> : null}
          {rocket.description}
        </p>
        { rocket.reserved ? <button type="button" onClick={() => { dispatch(cancelButton(rocket.id)); }}>cancelButton</button> : <button type="button" onClick={() => { dispatch(reserveButton(rocket.id)); }}>Reserve Button</button>}
      </div>

    </div>
  );
};

export default RocketItem;
