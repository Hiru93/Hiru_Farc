import {
    UPLOAD_MATERIALS_SUBMIT_FORM,
    UPLOAD_MATERIALS_SUBMIT_FORM_SUCCESS
} from './actionTypes';

export function submitForm(formData, token) {
    return {
        type: UPLOAD_MATERIALS_SUBMIT_FORM,
        formData,
        token
    };
}

export function submitFormSuccess() {
    return {
        type: UPLOAD_MATERIALS_SUBMIT_FORM_SUCCESS
    };
}