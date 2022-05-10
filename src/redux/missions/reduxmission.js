import { fetchMissions } from '../API';

const ADDMISSION = '.missons/addmission';

const InitialState = [];
export const missionReducer = (state = InitialState, action = {}) => {
  switch (action.type) {
    case ADDMISSION:
      return [...action.mission];
    default: return state;
  }
};

export function addMission(mission) {
  return {
    type: ADDMISSION,
    mission,
  };
}

export const getMissions = () => async (dispatch) => {
  const response = await fetchMissions();
  dispatch(addMission(response));
};
