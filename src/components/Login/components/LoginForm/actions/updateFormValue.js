import {
    UPDATE_LOGIN_FORM_DEFAULT,
    UPDATE_LOGIN_FORM_PASSWORD,
    UPDATE_LOGIN_FORM_USERNAME
} from './actionTypes';

export function updateFormField(field, value) {
    switch(field) {
        case 'username':
            return {
                type: UPDATE_LOGIN_FORM_USERNAME,
                username: value
            };
        case 'password':
            return {
                type: UPDATE_LOGIN_FORM_PASSWORD,
                password: value
            };
        default:
            return {
                type: UPDATE_LOGIN_FORM_DEFAULT
            };
    }
}