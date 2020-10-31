import {
    DATA_MANAGE_ACCORDION_INCI_FORM_SUBMIT
} from './actionTypes';

import {
    DATA_MANAGE_GET_CATEGORIES
} from '../../../actions/actionTypes';

export function submitForm(formData, token) {
    return {
        type: DATA_MANAGE_ACCORDION_INCI_FORM_SUBMIT,
        formData,
        token
    }
};

export function submitFormSuccess(token) {
    return {
        type: DATA_MANAGE_GET_CATEGORIES,
        token
    }
};