import {initiateServiceCall} from "../remote/services"


export const SET_APP_STATE = 'SET_APP_STATE';


export const callService = (service, params) => {
  // notify the app of the request going out
  return dispatch => {
    initiateServiceCall(service, params, dispatch);
  }
};



