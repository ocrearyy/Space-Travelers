import React from 'react';
import PropTypes from 'prop-types';

const MissionItem = (props) => {
  const { mission } = props;

  return (
    <div>
      <h1>{mission.mission_name}</h1>
      <p>{mission.description}</p>
    </div>
  );
};

MissionItem.propTypes = {
  mission: PropTypes.shape({
    mission_name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,

};

export default MissionItem;
