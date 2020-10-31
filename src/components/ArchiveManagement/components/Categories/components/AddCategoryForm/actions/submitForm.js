import {
    ARCHIVE_MANAGEMENT_CATEGORIES_NEW_FORM_SUBMIT
} from './actionTypes';
import {
    ARCHIVE_MANAGEMENT_GET_CURRENT_CATEGORIES_DATA
} from '../../../actions/actionTypes';

export function submitForm(formData, token) {
    return {
        type: ARCHIVE_MANAGEMENT_CATEGORIES_NEW_FORM_SUBMIT,
        formData,
        token
    }
}

export function submitFormSuccess(token) {
    return {
        type: ARCHIVE_MANAGEMENT_GET_CURRENT_CATEGORIES_DATA,
        token
    }
}