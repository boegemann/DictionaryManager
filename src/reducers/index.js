import {combineReducers} from 'redux';
import application from './app';
import header from './header';
import screen from './screen';
import {reducer as formReducer} from 'redux-form'

const todoApp = combineReducers({
  application,
  header,
  screen,
  form: formReducer
});

export default todoApp
