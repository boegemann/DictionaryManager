import React from 'react'
import {render} from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import reducer from './reducers'
import Root from './components/Root'
import thunkMiddleware from 'redux-thunk'
import {getNewState} from './remote/services'

let createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

// Now call the server to get the inital application state
getNewState((newState) => {
  let store = createStoreWithMiddleware(reducer, newState);
  render(
    <Root store={store}/>,
    document.getElementById('root')
  );
}, (err) => {
  alert(err.message)
});


