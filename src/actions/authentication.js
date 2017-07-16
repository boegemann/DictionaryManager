import {login} from '../remote/services';

// There are three possible states for our login
// process and we need actions for each of them
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

const requestLogin = (creds) => {
  return {
    type: LOGIN_REQUEST,
    isFetching: true,
    isAuthenticated: false,
    creds
  }
};



const loginError = (message) => {
  return {
    type: LOGIN_FAILURE,
    isFetching: false,
    isAuthenticated: false,
    message
  }
};


// Calls the API to get a token and
// dispatches actions along the way
export function loginUser(creds) {
  return dispatch => {
    dispatch(requestLogin(creds));
    login(creds, function (action) {
      action.map(dispatch);
    }, function (errMessage) {
      dispatch(loginError(errMessage))
    });
  }
}


// TODO: Logout

// export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
// export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';

// function requestLogout() {
//   return {
//     type: LOGOUT_REQUEST,
//     isFetching: true,
//     isAuthenticated: true
//   }
// }
//
// function receiveLogout() {
//   return {
//     type: LOGOUT_SUCCESS,
//     isFetching: false,
//     isAuthenticated: false
//   }
// }


// Logs the user out
// export function logoutUser() {
//   return dispatch => {
//     dispatch(requestLogout());
//     localStorage.removeItem('id_token');
//     localStorage.removeItem('access_token');
//     dispatch(receiveLogout());
//   }
// }
