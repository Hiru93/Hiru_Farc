import { combineReducers } from 'redux';

//Actions
import {
    DATA_MANAGEMENT_MODAL_FORM_INCI_CATEGORY_UPDATE,
    DATA_MANAGEMENT_MODAL_FORM_INCI_NAME_UPDATE,
    DATA_MANAGEMENT_MODAL_FORM_INCI_COMMON_NAME,
    DATA_MANAGEMENT_MODAL_FORM_INCI_FC_VALUE_UPDATE,
    DATA_MANAGEMENT_MODAL_FORM_INCI_SENTISER_UPDATE,
    DATA_MANAGEMENT_MODAL_FORM_INCI_OTHER_INFO_UPDATE,
    DATA_MANAGEMENT_MODAL_FORM_INCI_INFO_UPDATE,
    DATA_MANAGEMENT_MODAL_FORM_INCI_BIBLIOGRAPHY_UPDATE
} from '../actions/actionTypes';

import {
    DATA_MANAGE_INCI_HANDLE_MODAL_STATE,
    DATA_MANAGE_ACCORDION_INCI_FORM_SUBMIT
} from '../../../actions/actionTypes';

let initialState = {
    category: null,
    name: null,
    commonDenomination: null,
    fc: null,
    sensitizing: null,
    otherDiscussions: null,
    info: null,
    bibliography: null
};

export const category = (state = initialState.category, action) => {
    switch(action.type) {
        case DATA_MANAGEMENT_MODAL_FORM_INCI_CATEGORY_UPDATE:
            return action.value;
        case DATA_MANAGE_INCI_HANDLE_MODAL_STATE:
            return null;
        case DATA_MANAGE_ACCORDION_INCI_FORM_SUBMIT:
            return null;
        default:
            return state;
    }
};

export const name = (state = initialState.name, action) => {
    switch(action.type) {
        case DATA_MANAGEMENT_MODAL_FORM_INCI_NAME_UPDATE:
            return action.value;
        case DATA_MANAGE_INCI_HANDLE_MODAL_STATE:
            return null;
        case DATA_MANAGE_ACCORDION_INCI_FORM_SUBMIT:
            return null;
        default:
            return state;
    }
};

export const commonDenomination = (state = initialState.commonDenomination, action) => {
    switch(action.type) {
        case DATA_MANAGEMENT_MODAL_FORM_INCI_COMMON_NAME:
            return action.value;
        case DATA_MANAGE_INCI_HANDLE_MODAL_STATE:
            return null;
        case DATA_MANAGE_ACCORDION_INCI_FORM_SUBMIT:
            return null;
        default:
            return state;
    }
};

export const fc = (state = initialState.fc, action) => {
    switch(action.type) {
        case DATA_MANAGEMENT_MODAL_FORM_INCI_FC_VALUE_UPDATE:
            return action.value;
        case DATA_MANAGE_INCI_HANDLE_MODAL_STATE:
            return null;
        case DATA_MANAGE_ACCORDION_INCI_FORM_SUBMIT:
            return null;
        default:
            return state;
    }
};

export const sensitizing = (state = initialState.sensitizing, action) => {
    switch(action.type) {
        case DATA_MANAGEMENT_MODAL_FORM_INCI_SENTISER_UPDATE:
            return action.value;
        case DATA_MANAGE_INCI_HANDLE_MODAL_STATE:
            return null;
        case DATA_MANAGE_ACCORDION_INCI_FORM_SUBMIT:
            return null;
        default:
            return state;
    }
};

export const otherDiscussions = (state = initialState.otherDiscussions, action) => {
    switch(action.type) {
        case DATA_MANAGEMENT_MODAL_FORM_INCI_OTHER_INFO_UPDATE:
            return action.value;
        case DATA_MANAGE_INCI_HANDLE_MODAL_STATE:
            return null;
        case DATA_MANAGE_ACCORDION_INCI_FORM_SUBMIT:
            return null;
        default:
            return state;
    }
};

export const info = (state = initialState.info, action) => {
    switch(action.type) {
        case DATA_MANAGEMENT_MODAL_FORM_INCI_INFO_UPDATE:
            return action.value;
        case DATA_MANAGE_INCI_HANDLE_MODAL_STATE:
            return null;
        case DATA_MANAGE_ACCORDION_INCI_FORM_SUBMIT:
            return null;
        default:
            return state;
    }
};

export const bibliography = (state = initialState.bibliography, action) => {
    switch(action.type) {
        case DATA_MANAGEMENT_MODAL_FORM_INCI_BIBLIOGRAPHY_UPDATE:
            return action.value;
        case DATA_MANAGE_INCI_HANDLE_MODAL_STATE:
            return null;
        case DATA_MANAGE_ACCORDION_INCI_FORM_SUBMIT:
            return null;
        default:
            return state;
    }
};

const inciFormUpdate = combineReducers({
    category,
    name,
    commonDenomination,
    fc,
    sensitizing,
    otherDiscussions,
    info,
    bibliography  
});

export default inciFormUpdate;