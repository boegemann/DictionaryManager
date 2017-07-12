import {
  LOGIN_SUCCESS
} from '../actions/authentication'


const header = (state = {}, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      if (!action.newState.error) {

        console.log(action.newState);
        return action.newState.app.header;
      } else {
        return state;
      }
    default:
      return state
  }
}


export default header
