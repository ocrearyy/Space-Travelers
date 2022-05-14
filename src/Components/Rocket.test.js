import {
  addrockets, reserveButton, rocketReducer,
} from '../redux/Rockets/reduxrocket';

describe('Get Rockets', () => {
  test('When Get Rockets is executed, it should return a list of rockets', () => {
    const initialState = [];
    const state = [
      {
        rocket_id: '0',
        rocket_name: 'Rocket0',
        rocket_description: 'Description 0',
      },
      {
        rocket_id: '1',
        rocket_name: 'Rocket1',
        rocket_description: 'Description 1',
      },
      {
        rocket_id: '2',
        rocket_name: 'Rocket2',
        rocket_description: 'Description 2',
      },
    ];

    const result = rocketReducer(initialState, addrockets(state));
    expect(result).toEqual(state);
  });
});

describe('Join a rocket', () => {
  test('When a rocket is joined, its state should change to true', () => {
    const state = [
      {
        rocket_id: '0',
        rocket_name: 'Rocket0',
        rocket_description: 'Description 0',
      },
      {
        rocket_id: '1',
        rocket_name: 'Rocket1',
        rocket_description: 'Description 1',
        reserved: true,

      },
      {
        rocket_id: '2',
        rocket_name: 'Rocket2',
        rocket_description: 'Description 2',
      },
    ];
    const result = rocketReducer(state, reserveButton('1'));
    const newState = [
      {
        rocket_id: '0',
        rocket_name: 'Rocket0',
        rocket_description: 'Description 0',
      },
      {
        rocket_id: '1',
        rocket_name: 'Rocket1',
        rocket_description: 'Description 1',
        reserved: true,
      },
      {
        rocket_id: '2',
        rocket_name: 'Rocket2',
        rocket_description: 'Description 2',
      },
    ];
    expect(result).toEqual(newState);
  });
});

describe('Join a rocket', () => {
  test('When a rocket is joined, its state should change to true', () => {
    const state = [
      {
        rocket_id: '0',
        rocket_name: 'Rocket0',
        rocket_description: 'Description 0',
      },
      {
        rocket_id: '1',
        rocket_name: 'Rocket1',
        rocket_description: 'Description 1',
        reserved: true,

      },
      {
        rocket_id: '2',
        rocket_name: 'Rocket2',
        rocket_description: 'Description 2',
      },
    ];
    const result = rocketReducer(state, reserveButton('1'));
    const newState = [
      {
        rocket_id: '0',
        rocket_name: 'Rocket0',
        rocket_description: 'Description 0',
      },
      {
        rocket_id: '1',
        rocket_name: 'Rocket1',
        rocket_description: 'Description 1',
        reserved: true,
      },
      {
        rocket_id: '2',
        rocket_name: 'Rocket2',
        rocket_description: 'Description 2',
      },
    ];
    expect(result).toEqual(newState);
  });
});
