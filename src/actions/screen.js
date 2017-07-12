import {getScreenData} from '../remote/services'


export const SCREEN_DATA_REQUEST = 'SCREEN_DATA_REQUEST';
export const SCREEN_DATA_SUCCESS = 'SCREEN_DATA_SUCCESS';
export const SCREEN_DATA_FAILURE = 'SCREEN_DATA_FAILURE';

const requestScreenData = (screenId) => {
  return {
    type: SCREEN_DATA_REQUEST,
    screenId: screenId
  }
};

const receiveScreenData = (screenData) => {
  return {
    type: SCREEN_DATA_SUCCESS,
    screenData: screenData
  }
};

const screenDataError = (error) => {
  return {
    type: SCREEN_DATA_FAILURE,
    error: error
  }
};

export const fetchScreenData = (appName, screenId) => {
  // notify the app of the request going out
  return dispatch => {
    dispatch(requestScreenData(screenId));
    getScreenData(appName, screenId, (screenData) => {
      dispatch(receiveScreenData(screenData));
    }, (error) => {
      dispatch(screenDataError(error));
    });
  }
};

