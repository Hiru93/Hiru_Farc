import {
    ARCHIVE_MANAGEMENT_CATEGORIES_EDIT_FORM_SUBMIT
} from './actionTypes';
import {
    ARCHIVE_MANAGEMENT_GET_CURRENT_CATEGORIES_DATA
} from '../../../actions/actionTypes';

export function submitForm(formData, token, id) {
    return {
        type: ARCHIVE_MANAGEMENT_CATEGORIES_EDIT_FORM_SUBMIT,
        formData,
        token,
        id
    }
}

export function submitFormSuccess(token) {
    return {
        type: ARCHIVE_MANAGEMENT_GET_CURRENT_CATEGORIES_DATA,
        token
    }
}