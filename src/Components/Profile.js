import { useSelector } from 'react-redux';


const Profile = () => {
  const rockets = useSelector((state) => state.filter((rocket) => rocket.reserved));
  return (
  <div>
    <ul>
      {
        rockets.map((rocket) => (
          <p>{rocket.rocket_name}</p>
        ))
      }
    </ul>
  </div>
  )
};

export default Profile;
