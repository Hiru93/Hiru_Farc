import {
    DATA_MANAGE_INCI_INSERT_FORM_SUBMIT
} from './actionTypes';

import {
    DATA_MANAGE_GET_CATEGORIES
} from '../../../../../actions/actionTypes';

export function formSubmit(formData, token) {
    return {
        type: DATA_MANAGE_INCI_INSERT_FORM_SUBMIT,
        formData,
        token
    }
};

export function formSubmitSuccess(token) {
    return {
        type: DATA_MANAGE_GET_CATEGORIES,
        token
    }
}