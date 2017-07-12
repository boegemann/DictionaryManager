import {LOGIN_SUCCESS} from '../actions/authentication'
import {SCREEN_DATA_REQUEST, SCREEN_DATA_SUCCESS, SCREEN_DATA_FAILURE} from '../actions/screen'

const screen = (state = {}, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      if (!action.newState.error) {
        return action.newState.app.screen;
      } else {
        return state;
      }
    case SCREEN_DATA_REQUEST:
      let newState = {navigate: 'loading', text: "Let's wait for " + action.screenId};
      return newState;
    case SCREEN_DATA_SUCCESS:
      action.screenData.navigate='finished';
      return action.screenData;
    case SCREEN_DATA_FAILURE:
      console.log(action.error);
      return {...state, error: action.error};
    default:
      return state;
  }
};
export default screen;
