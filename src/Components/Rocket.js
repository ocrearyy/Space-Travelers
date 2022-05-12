import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { cancelButton, reserveButton } from '../redux/Rockets/reduxrocket';

const RocketItem = (props) => {
  const { rocket } = props;
  const dispatch = useDispatch();
  return (
    <div className="rocketContainer">
      <div id="image">
        <img className="rocImage" src={rocket.flickr_images[0]} alt="images" />
      </div>
      <div id="about">
        <h1 className="rocketName">{rocket.rocket_name}</h1>
        <p id="para">
          {rocket.reserved ? <span>Reserved</span> : null}
          {rocket.description}
        </p>
        { rocket.reserved ? <button type="button" className="reserve" onClick={() => { dispatch(cancelButton(rocket.id)); }}>Cancel Rocket</button> : <button type="button" className="cancel" onClick={() => { dispatch(reserveButton(rocket.id)); }}>Reserve Rocket</button>}
      </div>

    </div>
  );
};

RocketItem.propTypes = {
  rocket: PropTypes.shape({
    reserved: PropTypes.bool.isRequired,
    description: PropTypes.string.isRequired,
    rocket_name: PropTypes.string.isRequired,
    flickr_images: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,

};

export default RocketItem;
