import { combineReducers } from 'redux';

//Actions
import {
    SUBMIT_LOGIN_INFO_SUCCESS
} from '../actions/actionTypes';
import {
    LOGOUT
} from '../../Landing/actions/actionTypes';

let initialState = {
    token: localStorage.getItem('token') ? localStorage.getItem('token') : ''
};

export const token = ( state = initialState.token, action ) => {
    switch(action.type) {
        case SUBMIT_LOGIN_INFO_SUCCESS:
            return action.token;
        case LOGOUT:
            return '';
        default:
            return state;
    }
};

const auth = combineReducers({
    token
});

export default auth;