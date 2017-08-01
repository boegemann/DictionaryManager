import {SNACK, CLOSE_SNACK} from '../actions/snack'

const snack = (state = {}, action) => {
    switch (action.type) {
        case SNACK:
        case  CLOSE_SNACK:
            return {...action}
        default:
            return state;
    }
};

export default snack;


