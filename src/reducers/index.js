import { combineReducers } from 'redux'
import app from './app'
import auth from './authentication'

const todoApp = combineReducers({
  app,
  auth
})

export default todoApp
