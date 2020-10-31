import { combineReducers } from 'redux';

//Actions
import {
    DATA_MANAGEMENT_MODAL_FORM_CATEGORIES_NAME_UPDATE,
    DATA_MANAGEMENT_MODAL_FORM_CATEGORIES_INFO_UPDATE,
    DATA_MANAGEMENT_MODAL_FORM_CATEGORIES_BIBLIOGRAPHY_UPDATE
} from '../actions/actionTypes';
import {
    DATA_MANAGE_ACCORDION_FORM_SUBMIT,
    DATA_MANAGE_CATEGORIES_HANDLE_MODAL_STATE
} from '../../../actions/actionTypes';

let initialState = {
    name: null,
    bibliography: null,
    info: null
};

export const name = (state = initialState.name, action) => {
    switch(action.type) {
        case DATA_MANAGEMENT_MODAL_FORM_CATEGORIES_NAME_UPDATE:
            return action.value;
        case DATA_MANAGE_ACCORDION_FORM_SUBMIT:
            return null;
        case DATA_MANAGE_CATEGORIES_HANDLE_MODAL_STATE:
            return null;
        default:
            return state;
    }
};

export const bibliography = (state = initialState.bibliography, action) => {
    switch(action.type) {
        case DATA_MANAGEMENT_MODAL_FORM_CATEGORIES_BIBLIOGRAPHY_UPDATE:
            return action.value;
        case DATA_MANAGE_ACCORDION_FORM_SUBMIT:
            return null;
            case DATA_MANAGE_CATEGORIES_HANDLE_MODAL_STATE:
                return null;
        default:
            return state;
    }
};

export const info = (state = initialState.info, action) => {
    switch(action.type) {
        case DATA_MANAGEMENT_MODAL_FORM_CATEGORIES_INFO_UPDATE:
            return action.value;
        case DATA_MANAGE_ACCORDION_FORM_SUBMIT:
            return null;
            case DATA_MANAGE_CATEGORIES_HANDLE_MODAL_STATE:
                return null;
        default:
            return state;
    }
};

const categoryFormRowUpdate = combineReducers({
    name,
    bibliography,
    info
});

export default categoryFormRowUpdate;