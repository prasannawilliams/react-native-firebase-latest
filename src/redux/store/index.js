// Checked by Matthew (Aug 11)

import thunkMiddleware from 'redux-thunk';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {createLogger} from 'redux-logger';
import * as reducers from '../reducers';

const reducer = combineReducers(reducers);
const logger = createLogger({
  timestamp: true,
});
export const store = createStore(
  reducer,
  {},
  applyMiddleware(logger, thunkMiddleware),
);
