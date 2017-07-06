import React from 'react'
import {render} from 'react-dom'
import {createStore} from 'redux'
import reducer from './reducers'
import fetch from 'isomorphic-fetch'; // so I can use fetch()
import Root from './components/Root'


fetch('https://dictionayryservices.herokuapp.com/APP')
  .then(function (response) {
    if (response.status >= 400) {
      throw new Error("Bad response from server");
    }
    return response.json();
  })
  .then(function (initialState) {
    document.title = initialState.app.title;
    let store = createStore(reducer, initialState.app);
    render(
      <Root store={store} />,
      document.getElementById('root')
    );
  });


