import {
  LOGIN_SUCCESS
} from '../actions/authentication'

const screen = (state = {}, action) => {
  switch (action.type){
    case LOGIN_SUCCESS:
      return action.newState.app.screens
    default:
      return state
  }
}


export default screen
