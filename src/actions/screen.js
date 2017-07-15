import {getScreenData} from '../remote/services'

export const SET_APP_STATE = 'SET_APP_STATE'

export const SCREEN_DATA_REQUEST = 'SCREEN_DATA_REQUEST';
export const SCREEN_DATA_SUCCESS = 'SCREEN_DATA_SUCCESS';
export const SCREEN_DATA_FAILURE = 'SCREEN_DATA_FAILURE';

const requestScreenData = (screenId) => {
  return {
    type: SCREEN_DATA_REQUEST,
    screenId: screenId
  }
};


const screenDataError = (error) => {
  return {
    type: SCREEN_DATA_FAILURE,
    error: error
  }
};

export const setAppState = (newState) => {
  return {
    type: SET_APP_STATE,
    newState: newState
  }
}


export const fetchScreenData = (appName, screenId) => {
  // notify the app of the request going out
  return dispatch => {
    dispatch(requestScreenData(screenId));
    getScreenData(appName, screenId, (screenData) => {
      dispatch(screenData);
    }, (error) => {
      dispatch(screenDataError(error));
    });
  }
};

