import {SET_APP_STATE} from '../actions/screen';


const header = (state = {}, action) => {
  switch (action.type) {
    case SET_APP_STATE:
      if (!action.newState.error) {

        console.log(action.newState);
        return action.newState.app.header;
      } else {
        return state;
      }
    default:
      return state
  }
};


export default header
