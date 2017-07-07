import {
  LOGIN_SUCCESS
} from '../actions/authentication'


const header = (state = {}, action) => {
  switch (action.type){
    case LOGIN_SUCCESS:
      console.log(">>");
      console.log(action);
      return action.newState.app.header
    default:
      return state
  }
}


export default header
