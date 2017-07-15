import {SET_APP_STATE} from '../actions/screen';


const header = (state = {}, action) => {
  switch (action.type) {
    case SET_APP_STATE:
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
