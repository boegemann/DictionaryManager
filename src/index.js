import React from 'react'
import {render} from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import reducer from './reducers'
import fetch from 'isomorphic-fetch'; // so I can use fetch()
import Root from './components/Root'
import thunkMiddleware from 'redux-thunk'
let createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore)


//const url='https://dictionayryservices.herokuapp.com/APP';
const url = 'http://localhost:3001';
const appService = "/APP";


// we start off by seeing whether we have a JWT token stored
let access_token = localStorage.getItem("access_token");

// Now call the server to get the inital application state
fetch(url + appService, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    access_token: access_token
  })
}).then(function (response) {
  console.log(response)
  if (response.status >= 400) {
    throw new Error("Bad response from server");
  }
  return response.json();
}).then(function (initialState) {
  console.log(initialState)
  document.title = initialState.app.title;
  let store = createStoreWithMiddleware(reducer, initialState);
  render(
    <Root store={store}/>,
    document.getElementById('root')
  );
});


