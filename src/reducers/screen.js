import {SCREEN_DATA_REQUEST, SCREEN_DATA_SUCCESS, SCREEN_DATA_FAILURE, SET_APP_STATE} from '../actions/screen'

const screen = (state = {}, action) => {
  switch (action.type) {
    case SET_APP_STATE:
      if (!action.newState.error) {
        return action.newState.app.screen;
      } else {
        return state;
      }
    case SCREEN_DATA_REQUEST:
      return {navigate: 'loading', text: "Let's wait for " + action.screenId};
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
