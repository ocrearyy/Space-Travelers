import React from 'react';

const MissionItem = (props) => {
  const { mission } = props;

  return (
    <tr>
      <td className="mission-title">{mission.mission_name}</td>
      <td className="mission-paragraph">{mission.description}</td>
      <td className="member-mission">
        <button className="member" type="button" label="Member">NOT A MEMBER</button>
      </td>
      <td>
       { mission.reserved ? <button type="button" className="join-mission" onClick={() => { dispatch(cancelButton(mission.id)); }}>Leave Mission</button> : <button type="button" className="join-mission" onClick={() => { dispatch(reserveButton(mission.id)); }}>Join Mission</button>}
      </td>
    </tr>
  );
};

export default MissionItem;
