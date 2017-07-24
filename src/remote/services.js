import {url} from '../env';

const urlActions = "/ACTIONS";



export const SERVICE_CALL_SUCCESS = 'SCREEN_DATA_SUCCESS';
export const SERVICE_CALL_FAILURE = 'SCREEN_DATA_FAILURE';
export const SERVICE_CALL_START = 'SCREEN_DATA_REQUEST';


const requestService = () => {
  return {
    type: SERVICE_CALL_START
  }
};

const serviceSuccess = () => {
  return {
    type: SERVICE_CALL_SUCCESS
  }
};

const serviceFailure = (error) => {
  return {
    type: SERVICE_CALL_FAILURE,
    error: error
  }
};


export const initiateServiceCall = (service, params, dispatch) => {
  dispatch(requestService());
  let token = localStorage.getItem("access_token");
  token = token==="null"?null:token; // local storage does only store string turning null into "null"
  console.log(localStorage.getItem("access_token"));
  fetch(url + urlActions, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      service: service,
      token: token,
      currentPath: window.location.pathname,
      params: params
    })
  }).then(function (response) {
    if (response.status >= 400) {
      if (typeof (error) === 'function') {
        dispatch(serviceFailure("Bad response from server"));
      }
    } else response.json().then((actions) => {
      console.log(actions);
      actions.forEach((a) => {
        dispatch(a)
      })
      dispatch(serviceSuccess);
    });
  }).catch((err) => {
    if (typeof (err) === 'function') {
      dispatch(serviceFailure(err));
    }
  })
};


