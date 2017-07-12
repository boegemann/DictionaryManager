import {
  LOGIN_SUCCESS
} from '../actions/authentication'


const title = (state = {}, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      if (!action.newState.error) {
        return action.newState.app.title
      } else {
        return state;
      }
    default:
      return state
  }
}


export default title
