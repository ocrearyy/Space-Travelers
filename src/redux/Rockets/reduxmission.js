const LOADINGMISSION = 'missions/LOADINGMISSIONS';
const ADDROCKET = 'missions/ADDMISSION';
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

export 