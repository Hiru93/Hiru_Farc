import { combineReducers } from 'redux';

import {
    DATA_MANAGE_INCI_INSERT_FORM_CATEGORY_UPDATE,
    DATA_MANAGE_INCI_INSERT_FORM_INCI_NAME_UPDATE,
    DATA_MANAGE_INCI_INSERT_FORM_INCI_COMMON_NAME_UPDATE,
    DATA_MANAGE_INCI_INSERT_FORM_FC_UPDATE,
    DATA_MANAGE_INCI_INSERT_FORM_BIBLIOGRAPHY_UPDATE,
    DATA_MANAGE_INCI_INSERT_FORM_INFO_UPDATE,
    DATA_MANAGE_INCI_INSERT_FORM_SENTISER_UPDATE,
    DATA_MANAGE_INCI_INSERT_FORM_OTHER_INFO_UPDATE
} from '../actions/actionTypes';

import {
    DATA_MANAGE_GET_CATEGORIES
} from '../../../../../actions/actionTypes';

let initialState = {
    category: null,
    inciName: null,
    inciCommonName: null,
    FCvalue: null,
    bibliography: null,
    info: null,
    sentiser: null,
    otherInfo: null
};

export const category = (state = initialState.category, action) => {
    switch(action.type) {
        case DATA_MANAGE_INCI_INSERT_FORM_CATEGORY_UPDATE:
            return action.value;
        case DATA_MANAGE_GET_CATEGORIES:
            return null;
        default:
            return state;
    }
};

export const inciName = (state = initialState.inciName, action) => {
    switch(action.type) {
        case DATA_MANAGE_INCI_INSERT_FORM_INCI_NAME_UPDATE:
            return action.value;
        case DATA_MANAGE_GET_CATEGORIES:
            return null;
        default:
            return state;
    }
};

export const inciCommonName = (state = initialState.inciCommonName, action) => {
    switch(action.type) {
        case DATA_MANAGE_INCI_INSERT_FORM_INCI_COMMON_NAME_UPDATE:
            return action.value;
        case DATA_MANAGE_GET_CATEGORIES:
            return null;
        default:
            return state;
    }
};

export const FCvalue = (state = initialState.FCvalue, action) => {
    switch(action.type) {
        case DATA_MANAGE_INCI_INSERT_FORM_FC_UPDATE:
            return action.value;
        case DATA_MANAGE_GET_CATEGORIES:
            return null;
        default:
            return state;
    }
};

export const bibliography = (state = initialState.bibliography, action) => {
    switch(action.type) {
        case DATA_MANAGE_INCI_INSERT_FORM_BIBLIOGRAPHY_UPDATE:
            return action.value;
        case DATA_MANAGE_GET_CATEGORIES:
            return null;
        default:
            return state;
    }
};

export const info = (state = initialState.info, action) => {
    switch(action.type) {
        case DATA_MANAGE_INCI_INSERT_FORM_INFO_UPDATE:
            return action.value;
        case DATA_MANAGE_GET_CATEGORIES:
            return null;
        default:
            return state;
    }
};

export const sentiser = (state = initialState.sentiser, action) => {
    switch(action.type) {
        case DATA_MANAGE_INCI_INSERT_FORM_SENTISER_UPDATE:
            return action.value;
        case DATA_MANAGE_GET_CATEGORIES:
            return null;
        default:
            return state;
    }
};

export const otherInfo = (state = initialState.otherInfo, action) => {
    switch(action.type) {
        case DATA_MANAGE_INCI_INSERT_FORM_OTHER_INFO_UPDATE:
            return action.value;
        case DATA_MANAGE_GET_CATEGORIES:
            return null;
        default:
            return state;
    }
};

const dataManageInciForm = combineReducers({
    category,
    inciName,
    inciCommonName,
    FCvalue,
    bibliography,
    info,
    sentiser,
    otherInfo
});

export default dataManageInciForm;