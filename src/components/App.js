import React from 'react'
import Header from "../containers/Header";
import Screen from "../containers/Screen";
import {
  BrowserRouter,
  Route, Redirect, Switch
} from 'react-router-dom'



const App = ({isAuthenticated, errorMessage}) => (
  <div>
    <Header titleClass="app_title" path="app.header"/>
    <div>{errorMessage}</div>
    <div className="content">
      <BrowserRouter>
        <Switch>
          <Redirect exact from="/" to="/home"/>
          <Route path="/:appname/:screen" render={(props) => (
            <Screen {...props}/>
          )}/>
        </Switch>
      </BrowserRouter>
    </div>
  </div>
);

export default App

