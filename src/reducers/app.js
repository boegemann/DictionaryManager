import {combineReducers} from 'redux';
import header from './header';
import screen from './screen';
import title from './title';
import name from './appName'


const app = combineReducers({
  header,
  screen,
  title,
  name
});

export default app
