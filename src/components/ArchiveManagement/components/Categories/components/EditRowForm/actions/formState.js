import {
    ARCHIVE_MANAGEMENT_CATEGORIES_CLOSE_EDIT_FORM
} from './actionTypes';

export function formState(currentState) {
    return {
        type: ARCHIVE_MANAGEMENT_CATEGORIES_CLOSE_EDIT_FORM,
        currentState
    }
}