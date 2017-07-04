import { combineReducers } from 'redux'
import header from './header'
import todos from './todos'
import visibilityFilter from './visibilityFilter'

const todoApp = combineReducers({
  header,
  todos,
  visibilityFilter
})

export default todoApp
