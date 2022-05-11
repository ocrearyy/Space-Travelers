import { useSelector } from 'react-redux';


const Profile = () => {
  const rockets = useSelector((state) => state.rockets.filter((rocket) => rocket.reserved));

  return (
    <div className="rendered">
      <div>
        <h3>My Missions</h3>
      </div>
      <div>
        <h3>My Rockets</h3>
        <ul id="rocketRender">
          {
          rockets.map((rocket) => (
            <p id="renderedList">
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
