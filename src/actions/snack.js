import {exists} from '../util'

export const SNACK = 'SNACK';
export const CLOSE_SNACK = 'CLOSE_SNACK';

export const LEVEL_INFO = "INFO";
export const LEVEL_WARN = "_WARN";
export const LEVEL_ERROR = "ERROR";


export const createSnack = (text, duration, level) => {
    return {
        type: SNACK,
        text: text,
        duration: exists(duration) ? duration : 2000,
        level: exists(level) ? level : LEVEL_INFO,
        open: true
    }
};

export const closeSnack = () => {
    return {
        type: CLOSE_SNACK,
        open: false
    }
};

