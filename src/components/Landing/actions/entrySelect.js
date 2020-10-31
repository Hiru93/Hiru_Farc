import {
    SELECTED_ENTRY
} from './actionTypes';

export function entrySelect(key, componentId) {
    return {
        type: SELECTED_ENTRY,
        key,
        componentId
    }
};