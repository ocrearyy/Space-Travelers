const rocketURL = 'https://api.spacexdata.com/v3/rockets';
const missionURL = 'https://api.spacexdata.com/v3/missions';

const getRockets = async (
  id, rocket_name, description, flickr_image,
) => {
  const response = await fetch(`${rocketURL}?id=${id}&rocket_name=${rocket_name}&description=${description}&flickr_image=${flickr_image}`);
  return response.json();
};

export default getRockets
