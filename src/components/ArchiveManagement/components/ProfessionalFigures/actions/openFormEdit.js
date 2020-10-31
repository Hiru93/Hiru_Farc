import {
    ARCHIVE_MANAGEMENT_OPEN_EDIT_FORM_FIGURES
} from './actionTypes';

export function openFormEdit(selectedRow) {
    return {
        type: ARCHIVE_MANAGEMENT_OPEN_EDIT_FORM_FIGURES,
        selectedRow
    }
}