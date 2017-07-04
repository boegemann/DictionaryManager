import React from 'react'
import {render} from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import App from './components/App'
import reducer from './reducers'






const initialState = {
  header: {
    content: {
      text:"WCG",className:"app_title"
    }
  }
};
const store = createStore(reducer, initialState);


render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
