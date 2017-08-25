import {ROWS_SELECTED} from '../actions/grid'

const gridSelection = (state = {}, action) => {
    switch (action.type) {
        case ROWS_SELECTED:
            let newState = {...state};
            newState[action.unitKey] = action.rows;

            return newState;
        default:
            return state;
    }
};

export default gridSelection;


