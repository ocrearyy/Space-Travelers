import {
  addmissions, cancelMission, reserveMission, missionReducer,
} from '../redux/missions/reduxmission';

describe('Get Missions', () => {
  test('When Get Missions is executed, it should return a list of missions', () => {
    const initialState = [];
    const state = [
      {
        mission_id: '0',
        mission_name: 'Mission0',
        mission_description: 'Description 0',
      },
      {
        mission_id: '1',
        mission_name: 'Mission1',
        mission_description: 'Description 1',
      },
      {
        mission_id: '2',
        mission_name: 'Mission2',
        mission_description: 'Description 2',
      },
    ];

    const result = missionReducer(initialState, addmissions(state));
    expect(result).toEqual(state);
  });
});

describe('Join a mission', () => {
  test('When a mission is joined, its state should change to true', () => {
    const state = [
      {
        mission_id: '0',
        mission_name: 'Mission0',
        mission_description: 'Description 0',
      },
      {
        mission_id: '1',
        mission_name: 'Mission1',
        mission_description: 'Description 1',

      },
      {
        mission_id: '2',
        mission_name: 'Mission2',
        mission_description: 'Description 2',
      },
    ];
    const result = missionReducer(state, reserveMission('1'));
    const newState = [
      {
        mission_id: '0',
        mission_name: 'Mission0',
        mission_description: 'Description 0',
      },
      {
        mission_id: '1',
        mission_name: 'Mission1',
        mission_description: 'Description 1',
        reserved: true,
      },
      {
        mission_id: '2',
        mission_name: 'Mission2',
        mission_description: 'Description 2',
      },
    ];
    expect(result).toEqual(newState);
  });
});

describe('Join a mission', () => {
  test('When a mission is joined, its state should change to true', () => {
    const state = [
      {
        mission_id: '0',
        mission_name: 'Mission0',
        mission_description: 'Description 0',
      },
      {
        mission_id: '1',
        mission_name: 'Mission1',
        mission_description: 'Description 1',
        reserved: true,

      },
      {
        mission_id: '2',
        mission_name: 'Mission2',
        mission_description: 'Description 2',
      },
    ];
    const result = missionReducer(state, cancelMission('1'));
    const newState = [
      {
        mission_id: '0',
        mission_name: 'Mission0',
        mission_description: 'Description 0',
      },
      {
        mission_id: '1',
        mission_name: 'Mission1',
        mission_description: 'Description 1',
        reserved: false,
      },
      {
        mission_id: '2',
        mission_name: 'Mission2',
        mission_description: 'Description 2',
      },
    ];
    expect(result).toEqual(newState);
  });
});
