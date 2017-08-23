import {combineReducers} from 'redux';
import application from './application';
import header from './header';
import screen from './screen';
import data from './data';
import gridSelection from './grid';
import snack from './snack';
import alert from './alert';
import locale from './locale';
import {reducer as formReducer} from 'redux-form';
import {Reducers} from 'react-redux-grid';

const todoApp = combineReducers({
    application,
    header,
    screen,
    data,
    gridSelection,
    snack,
    alert,
    locale,
    form: formReducer,
    ...Reducers
});

export default todoApp
