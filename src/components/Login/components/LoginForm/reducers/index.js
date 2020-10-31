import { combineReducers } from 'redux';

//Actions
import {
    UPDATE_LOGIN_FORM_USERNAME,
    UPDATE_LOGIN_FORM_PASSWORD
} from '../actions/actionTypes';

import { SUBMIT_LOGIN_INFO_SUCCESS } from '../../../actions/actionTypes';

let initialState = {
    username: '',
    password: ''
};

export const username = (state = initialState.username, action) => {
    switch(action.type) {
        case UPDATE_LOGIN_FORM_USERNAME:
            return action.username;
        case SUBMIT_LOGIN_INFO_SUCCESS:
            return '';
        default:
            return state;
    }
}

export const password = (state = initialState.password, action) => {
    switch(action.type) {
        case UPDATE_LOGIN_FORM_PASSWORD:
            return action.password;
        case SUBMIT_LOGIN_INFO_SUCCESS:
            return '';
        default:
            return state;
    }
}

const loginForm = combineReducers({
    username,
    password
});

export default loginForm;