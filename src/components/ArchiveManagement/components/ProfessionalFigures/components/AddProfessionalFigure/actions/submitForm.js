import {
    ARCHIVE_MANAGEMENT_PROFESSIONAL_FIGURES_NEW_FORM_SUBMIT
} from './actionTypes';
import {
    ARCHIVE_MANAGEMENT_GET_CURRENT_PROFESSIONAL_FIGURES
} from '../../../actions/actionTypes';

export function submitForm(formData, token) {
    return {
        type: ARCHIVE_MANAGEMENT_PROFESSIONAL_FIGURES_NEW_FORM_SUBMIT,
        formData,
        token
    }
}

export function submitFormSuccess(token) {
    return {
        type: ARCHIVE_MANAGEMENT_GET_CURRENT_PROFESSIONAL_FIGURES,
        token
    }
}