import {
  LOGIN_SUCCESS
} from '../actions/authentication'


const header = (state = {}, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      if (action.newState.error) {
        console.error(action.newState.error);
      }
      return state;
    default:
      return state
  }
};


export default header
/**
 * Created by ibogemann on 11/07/2017.
 */
