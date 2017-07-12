import {combineReducers} from 'redux';
import app from './app';
import auth from './authentication';
import error from './error';

const todoApp = combineReducers({
  app,
  auth,
  error
})

export default todoApp
