import getData from '../API';

const LOADINGROCKET = 'rockets/LOADINGROCKETS';
const ADDROCKET = 'rockets/ADDROCKET';
const RESERVESTATE = 'rockets/RESERVE';
const RESERVEBUTTON = 'rockets/BUTTTON';
// const TOGGLE ='./rockets/TOGGLE'

const intialState = [];
export const rocketReducer = (state = intialState, action = {}) => {
  switch (action.type) {
    case LOADINGROCKET:
      return 'Take a chill pill, rockets loading';
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
  }, 3000);
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



