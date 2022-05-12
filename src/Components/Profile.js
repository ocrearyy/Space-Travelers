import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

const Profile = () => {
  const rockets = useSelector((state) => state.rockets.filter((rocket) => rocket.reserved));
  const missions = useSelector((state) => state.mission.filter((mission) => mission.reserved));

  return (
    <div className="rendered">
      <div id="wrapitup">
        <h3>My Missions</h3>
        <ul id="rocketRender">
          {
          missions.map((mission) => (
            <p id="renderedList" key={mission.mission_id}>
              {mission.mission_name}
            </p>
          ))
        }
        </ul>
      </div>
      <div id="wrapitup">
        <h3>My Rockets</h3>
        <ul id="rocketRender">
          {
          rockets.map((rocket) => (
            <p id="renderedList" key={rocket.id}>
              {rocket.rocket_name}
            </p>
          ))
        }
        </ul>
      </div>
    </div>
  );
};

Profile.propTypes = {
  rocket: PropTypes.shape({
    rocket_name: PropTypes.string.isRequired,
  }).isRequired,

};

export default Profile;
