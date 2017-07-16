import {SET_APP_STATE} from '../actions/screen';


const title = (state = {}, action) => {
  switch (action.type) {
    case SET_APP_STATE:
      if (!action.newState.error) {
        return action.newState.app.title
      } else {
        return state;
      }
    default:
      return state
  }
};


export default title
