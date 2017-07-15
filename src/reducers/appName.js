import {SET_APP_STATE} from '../actions/screen';

const name = (state = {}, action) => {
  switch (action.type) {
    case SET_APP_STATE:
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
