import { getData } from '../API';

const LOADINGROCKET = 'rockets/LOADINGROCKETS';
const ADDROCKET = 'rockets/ADDROCKET';
const RESERVESTATE = 'rockets/RESERVE';
const RESERVEBUTTON = 'rockets/BUTTTON';
const CANCELBUTTON = 'rockets/CANCEL';
// const TOGGLE ='./rockets/TOGGLE'

const intialState = [];
export const rocketReducer = (state = intialState, action = {}) => {
  switch (action.type) {
    case LOADINGROCKET:
      return 'Want to go to space 🚀? Your dream is about to come true 🔮. Close your eyes 😊and open at the count of 2. One.. Two.';
    case ADDROCKET:
      return [
        ...action.rockets,
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
          return { ...state, reserved: false };
        }),

      ];
    default: return state;
  }
};

export function loadingRockets() {
  return {
    type: LOADINGROCKET,

  };
}
export function addrockets(rockets) {
  return {
    type: ADDROCKET,
    rockets,
  };
}
export const getRockets = () => async (dispatch) => {
  dispatch(loadingRockets());
  setTimeout(async () => {
    const response = await getData();
    dispatch(addrockets(response));
  }, 3500);
};

export function newState(id) {
  return {
    type: RESERVESTATE,
    id,
  };
}

// eslint-disable-next-line camelcase
export function reserveButton(id) {
  return {
    type: RESERVEBUTTON,
    id,
  };
}

// eslint-disable-next-line camelcase
export function cancelButton(id) {
  return {
    type: CANCELBUTTON,
    id,
  };
}
