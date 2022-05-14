import { fetchMissions } from '../API';

const ADDMISSION = 'missions/ADDMISSION';
const RESERVE = 'missions/Button';
const CANCEL = 'missions/CANCEL';

const initialState = [];
export const missionReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADDMISSION:
      return [
        ...action.missions,
      ];
    case RESERVE:
      return [
        ...state.map((state) => {
          if (state.mission_id !== action.mission_id) { return state; }
          return { ...state, reserved: true };
        }),
      ];
    case CANCEL:
      return [
        ...state.map((state) => {
          if (state.mission_id !== action.mission_id) { return state; }
          return { ...state, reserved: false };
        }),
      ];
    default: return state;
  }
};

export function addmissions(missions) {
  return {
    type: ADDMISSION,
    missions,
  };
}

export const getMissions = () => async (dispatch) => {
  const response = await fetchMissions();
  dispatch(addmissions(response));
};

// eslint-disable-next-line camelcase
export function reserveMission(mission_id) {
  return {
    type: RESERVE,
    mission_id, // eslint-disable-line no-use-before-define
  };
}

// eslint-disable-next-line camelcase
export function cancelMission(mission_id) {
  return {
    type: CANCEL,
    mission_id, // eslint-disable-line no-use-before-define
  };
}
