import {getActionsForServiceCall} from "../remote/services"


export const SET_APP_STATE = 'SET_APP_STATE';

export const SERVICE_CALL_START = 'SCREEN_DATA_REQUEST';
export const SERVICE_CALL_SUCCESS = 'SCREEN_DATA_SUCCESS';
export const SERVICE_CALL_FAILURE = 'SCREEN_DATA_FAILURE';


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

export const callService = (service, params) => {
  // notify the app of the request going out
  return dispatch => {
    dispatch(requestService());
    getActionsForServiceCall(service, params, (actions) => {
      actions.forEach((a) => {
        dispatch(a)
      })
      dispatch(serviceSuccess)
    }, (error) => {
      dispatch(serviceFailure(error));
    });
  }
};



