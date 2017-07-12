import {LOGIN_SUCCESS} from '../actions/authentication'

const name = (state = {}, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      if (!action.newState.error) {
        return action.newState.app.name;
      } else {
        return state;
      }
    default:
      return state
  }
};


export default name
