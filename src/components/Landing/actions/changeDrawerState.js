import {
    CHANGE_DRAWER_STATUS
} from './actionTypes';

export function handleChange(state) {
    return {
        type: CHANGE_DRAWER_STATUS,
        state
    }
};