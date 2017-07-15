import {LOGIN_REQUEST, LOGIN_FAILURE, LOGOUT_SUCCESS} from '../actions/authentication';
import {SET_APP_STATE} from '../actions/screen';

function auth(state = {
  isFetching: false,
  isAuthenticated: localStorage.getItem('id_token') ? true : false
}, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        isAuthenticated: false,
        user: action.creds
      });
    case SET_APP_STATE:
      localStorage.setItem('access_token', action.newState.auth.accessToken);
      return action.newState.auth;
    case LOGIN_FAILURE:
      return Object.assign({}, state, {

        isFetching: false,
        isAuthenticated: false,
        errorMessage: action.message

      });
    case LOGOUT_SUCCESS:
      return Object.assign({}, state, {

        isFetching: true,
        isAuthenticated: false

      });
    default:
      return state
  }
}

export default auth
