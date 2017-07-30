import {ROW_SELECTED} from '../actions/grid'

const gridSelection = (state = {}, action) => {
  switch (action.type) {
    case ROW_SELECTED:
      let newState = {...state}
      if (!action.selected){
        delete newState[action.unitKey];
      }else{
        newState[action.unitKey] = action.rowData
      }
      return newState;
    default:
      return state;
  }
};

export default gridSelection;


