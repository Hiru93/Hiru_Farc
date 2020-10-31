import {
    ARCHIVE_MANAGEMENT_FIGURE_CLOSE_EDIT_FORM
} from './actionTypes';

export function formState(currentState) {
    return {
        type: ARCHIVE_MANAGEMENT_FIGURE_CLOSE_EDIT_FORM,
        currentState
    }
}