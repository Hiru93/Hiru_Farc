import {
    ARCHIVE_MANAGEMENT_CHANGE_CURRENT_PROFESSIONAL_FIGURES_FORM_STATE
} from './actionTypes';

export function formState(newState) {
    return {
        type: ARCHIVE_MANAGEMENT_CHANGE_CURRENT_PROFESSIONAL_FIGURES_FORM_STATE,
        newState
    };
}