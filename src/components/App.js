import React from 'react'
import Header from "../containers/Header";
import Screen from "../containers/Screen";
import {
  BrowserRouter as Router,
  Route, Redirect, Switch
} from 'react-router-dom'

import Login from './Login'



const App = ({onLoginClick, isAuthenticated, errorMessage}) => (
  <div>
    <Header titleClass="app_title" path="app.header"/>
    <div>{errorMessage}</div>
    <div className="content">
      {!isAuthenticated &&
      <Login
        errorMessage={errorMessage}
        onLoginClick={onLoginClick}
      />
      }

      {isAuthenticated &&
      <Router>
        <Switch>
          <Redirect exact from="/" to="/home"/>
          <Route path="/:screen" render={(props) => (
            <Screen {...props}/>
          )}/>
        </Switch>


      </Router>
      }

    </div>
  </div>
)

export default App
