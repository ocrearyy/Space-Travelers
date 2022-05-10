const rocketURL = 'https://api.spacexdata.com/v3/rockets';
// const missionURL = 'https://api.spacexdata.com/v3/missions';

const getData = async () => {
  const response = await fetch(rocketURL);
  const responseData = await response.json();

  return responseData.map((element) => ({
    id: element.id,
    flickr_images: element.flickr_images,
    rocket_name: element.rocket_name,
    description: element.description,
  }));
};

export default getData;
