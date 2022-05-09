import { applyMiddleware, configureStore } from 'redux';

// Logger with default options
import logger from 'redux-logger';

const store = configureStore(
//   reducer,
  applyMiddleware(logger),
);

export default store;
