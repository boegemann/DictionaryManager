import React from 'react'
import {render} from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import reducer from './reducers'
import fetch from 'isomorphic-fetch'; // so I can use fetch()
import Root from './components/Root'
import jwtDecode from  'jwt-decode' ;
import thunkMiddleware from 'redux-thunk'
let createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore)


//const url='https://dictionayryservices.herokuapp.com/APP';
const url = 'http://localhost:3001/APP';

fetch(url)
  .then(function (response) {
    if (response.status >= 400) {
      throw new Error("Bad response from server");
    }
    return response.json();
  })
  .then(function (initialState) {
    let username = localStorage.getItem("user_name");
    let access_token = localStorage.getItem("access_token");
    if (access_token) {
      let jwt = jwtDecode(access_token);
      console.log(jwt);
      if (jwt.exp * 1000 > (new Date().getTime())) {
        initialState.auth.isAuthenticated = true;
      }

    }
    document.title = initialState.app.title;
    let store = createStoreWithMiddleware(reducer, initialState);
    render(
      <Root store={store}/>,
      document.getElementById('root')
    );
  });


