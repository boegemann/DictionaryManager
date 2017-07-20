import {combineReducers} from 'redux';
import application from './app';
import { reducer as formReducer } from 'redux-form'

const todoApp = combineReducers({
  application,
  form: formReducer
});

export default todoApp
