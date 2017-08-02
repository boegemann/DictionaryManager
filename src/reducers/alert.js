import {ALERT} from '../actions/alert'

const alert = (state = {}, action) => {
    switch (action.type) {
        case ALERT:
            return {...action}
        default:
            return state;
    }
};

export default alert;


