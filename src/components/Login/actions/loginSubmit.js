import {
    SUBMIT_LOGIN_INFO,
    SUBMIT_LOGIN_INFO_SUCCESS
} from './actionTypes';

export function loginSubmit(formData) {
    return {
        type: SUBMIT_LOGIN_INFO,
        formData
    }
}

export function loginSubmitSuccess(token) {
    return {
        type: SUBMIT_LOGIN_INFO_SUCCESS,
        token
    }
}