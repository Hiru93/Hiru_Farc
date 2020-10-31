import {
    ARCHIVE_MANAGEMENT_FIGURE_EDIT_FORM_SUBMIT
} from './actionTypes';
import {
    ARCHIVE_MANAGEMENT_GET_CURRENT_PROFESSIONAL_FIGURES
} from '../../../actions/actionTypes';

export function submitForm(formData, token, id) {
    return {
        type: ARCHIVE_MANAGEMENT_FIGURE_EDIT_FORM_SUBMIT,
        formData,
        token,
        id
    }
}

export function submitFormSuccess(token) {
    return {
        type: ARCHIVE_MANAGEMENT_GET_CURRENT_PROFESSIONAL_FIGURES,
        token
    }
}