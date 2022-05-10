import React from 'react';

const MissionItem = (props) => {
  const { mission} = props;
  return (
    <div>
      <h1>{mission.mission_name}</h1>
      <p>{mission.description}</p>
    </div>
  );
};

export default MissionItem;
