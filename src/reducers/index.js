import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import app from './app';

const reducers = { app };

export default history =>
  combineReducers({ router: connectRouter(history), ...reducers });
