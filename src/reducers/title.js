import {
  LOGIN_SUCCESS
} from '../actions/authentication'


const title = (state = {}, action) => {
  switch (action.type){
    case LOGIN_SUCCESS:
      return action.newState.app.title
    default:
      return state
  }
}


export default title
