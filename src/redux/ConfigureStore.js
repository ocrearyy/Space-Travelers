import { applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { rocketReducer } from './Rockets/reduxrocket';
// Logger with default options

const store = configureStore({ reducer: rocketReducer },
  composeWithDevTools(
    applyMiddleware(thunk, logger),
  ));

export default store;
