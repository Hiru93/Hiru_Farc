import { combineReducers } from 'redux';

import {
    AUTH_TOKEN_CHECK,
    RESET_TOKEN
} from '../actions/actionTypes';
import {
    SUBMIT_LOGIN_INFO_SUCCESS
} from '../../../components/Login/actions/actionTypes';
import {
    LOGOUT
} from '../../../components/Landing/actions/actionTypes';

const initialState = {
    token: localStorage.getItem('token') ? localStorage.getItem('token') : '',
    userInfo: {}
};

const token = (state = initialState.token, action) => {
    switch(action.type) {
        case SUBMIT_LOGIN_INFO_SUCCESS:
            return action.token;
        case LOGOUT:
            return '';
        case RESET_TOKEN:
            return '';
        default:
            return state;
    }
}

const userInfo = (state = initialState.userInfo, action) => {
    switch(action.type) {
        case AUTH_TOKEN_CHECK:
            return action.userInfo;
        case LOGOUT:
            return {};
        default:
            return state;
    }
}

const authComponent = combineReducers({
    token,
    userInfo
});

export default authComponent;