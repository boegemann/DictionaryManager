import {combineReducers} from 'redux';
import app from './app';
import auth from './authentication';
import error from './error';
import { reducer as formReducer } from 'redux-form'

const todoApp = combineReducers({

  app,
  auth,
  error,
  form: formReducer
});

export default todoApp
