import React from 'react'
import Header from "../containers/Header";
import Screen from "../containers/Screen";
import {
  BrowserRouter as Router,
  Route, Redirect, Switch
} from 'react-router-dom'



const App = ({onLoginClick, isAuthenticated, errorMessage}) => (
  <div>
    <Header titleClass="app_title" path="app.header"/>
    <div>{errorMessage}</div>
    <div className="content">
      <Router>
        <Switch>
          <Redirect exact from="/" to="/home"/>
          <Route path="/:screen"  render={(props) => (
            <Screen {...props}/>
          )}/>
        </Switch>
      </Router>
    </div>
  </div>
)

export default App

