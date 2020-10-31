import {
    ARCHIVE_MANAGEMENT_OPEN_EDIT_FORM_CATEGORIES
} from './actionTypes';

export function openFormEdit(selectedRow) {
    return {
        type: ARCHIVE_MANAGEMENT_OPEN_EDIT_FORM_CATEGORIES,
        selectedRow
    }
}