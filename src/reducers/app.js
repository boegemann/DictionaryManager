import { combineReducers } from 'redux'
import header from './header'
import screens from './screen'
import title from './title'

const app = combineReducers({
  header,
  screens,
  title
})

export default app
