import {
    ARCHIVE_MANAGEMENT_CHANGE_CURRENT_CATEGORIES_FORM_STATE
} from './actionTypes';

export function formState(newState) {
    return {
        type: ARCHIVE_MANAGEMENT_CHANGE_CURRENT_CATEGORIES_FORM_STATE,
        newState
    };
}