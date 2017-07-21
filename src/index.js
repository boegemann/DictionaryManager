import React from 'react';
import {render} from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import reducer from './reducers';
import thunkMiddleware from 'redux-thunk';
import {getActionsForUrlChange} from './remote/services';
import {Provider} from 'react-redux';
import {
  BrowserRouter,
  Route
} from 'react-router-dom'


import Application from './containers/ApplicationContainer';
import Header from './containers/HeaderContainer';
import Screen from './containers/ScreenContainer';

let createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

let store = createStoreWithMiddleware(reducer, {
    application: {
      title: "Loading ...",
      navigation: {
        currentUrl: window.location.pathname,
        targetUrl: ""
      }
    }
  }
);


render(
  <Provider store={store}>
    <BrowserRouter>
      <Route path="/:appname?/:screen?/:key?" render={(props) => (
        <div>
          <Application {...props}/>
          <Header {...props}/>
          <Screen {...props}/>
        </div>
      )}/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

getActionsForUrlChange("", window.location.pathname, (actions) => {
  console.log(actions);
  actions.forEach((a) => {
    store.dispatch(a)
  })
}, (err) => {
  console.error(err);
});




