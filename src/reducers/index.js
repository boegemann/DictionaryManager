import {combineReducers} from 'redux';
import application from './app';
import header from './header';
import screen from './screen';
import data from './data';
import {reducer as formReducer} from 'redux-form'

const todoApp = combineReducers({
  application,
  header,
  screen,
  data,
  form: formReducer
});

export default todoApp
