import React from 'react';

const RocketItem = (props) => {
  const { rocket } = props;

  return (
    <div>
      <div>
        <img src={rocket.flickr_images[0]} />
      </div>
      <div>
        <h1>{rocket.rocket_name}</h1>
        <p>{rocket.description}</p>
      </div>

    </div>
  );
};

export default RocketItem;
