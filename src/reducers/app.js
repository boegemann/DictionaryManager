import { combineReducers } from 'redux'
import header from './header'
import screens from './screen'

const app = combineReducers({
  header,
  screens
})

export default app
