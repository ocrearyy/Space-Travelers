import { getData } from '../API';

const LOADINGROCKET = 'rockets/LOADINGROCKETS';
const ADDROCKET = 'rockets/ADDROCKET';

const intialState = [];
export const rocketReducer = (state = intialState, action = {}) => {
  switch (action.type) {
    case LOADINGROCKET:
      return 'Take a chill pill, rockets loading';
    case ADDROCKET:
      return [
        ...action.rockets,
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
