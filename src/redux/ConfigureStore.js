import { applyMiddleware, combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { rocketReducer } from './Rockets/reduxrocket';
import { missionReducer } from './missions/reduxmission';
// Logger with default options
const rootReducer = combineReducers({
  rockets: rocketReducer,
  mission: missionReducer,
});
const store = configureStore({ reducer: rootReducer },
  composeWithDevTools(
    applyMiddleware(thunk, logger),
  ));

export default store;
