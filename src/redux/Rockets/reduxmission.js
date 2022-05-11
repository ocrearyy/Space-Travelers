import { func } from "prop-types";
import { fetchMissions } from "../API";

const LOADINGMISSION = 'missions/LOADINGMISSIONS';
const ADDMISSION = 'missions/ADDMISSION';
const RESERVESTATE = 'missions/RESERVE';
const RESERVEBUTTON = 'missions/Button';
const CANCELBUTTON = 'missions/CANCEL';

const initialState = [];
export const missionReducer = (state = initialState, action = {}) => {
  switch (action.type) {
      case LOADINGMISSION: 
      return 'Take a CHill Pill, missions loading';
      case ADDMISSION: 
      return [
          ...action.missions,
      ];
      case RESERVEBUTTON: 
        return [
            ...state.map((state) => {
                if (state.id !== action.id) { return state; }
                return { ...state, reserved: true };
            }),
        ];
        case CANCELBUTTON: 
        return [
          ...state.map((state) => {
              if (state.id !== action.id) { return state; }
              return { ...state, reserved: false}
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
  dispatch(loadingMissions());
  setTimeout(async () => {
    const response = await fetchMissions();
    dispatch(addmissions(response));
  }, 5000);
};

export function newState(id) {
  return {
    type: RESERVESTATE,
    id,
  };
}

export function reserveButton(id) {
  return {
    type: RESERVEBUTTON,
    id,
  };
}

export function cancelButton(id) {
    return {
      type: CANCELBUTTON,
      id,
    };
  }