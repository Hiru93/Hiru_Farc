import { combineReducers } from 'redux';

import {
    DATA_MANAGEMENT_CATEGORIES_INSERT_FORM_CATEGORY_NAME_UPDATE,
    DATA_MANAGEMENT_CATEGORIES_INSERT_FORM_BIBLIOGRAPHY_UPDATE,
    DATA_MANAGEMENT_CATEGORIES_INSERT_FORM_INFO_UPDATE,
} from '../actions/actionTypes';

import {
    DATA_MANAGE_GET_CATEGORIES
} from '../../../../../actions/actionTypes';

let initialState = {
    categoryName: null,
    bibliography: null,
    info: null
};

export const categoryName = (state = initialState.categoryName, action) => {
    switch(action.type) {
        case DATA_MANAGEMENT_CATEGORIES_INSERT_FORM_CATEGORY_NAME_UPDATE:
            return action.value;
        case DATA_MANAGE_GET_CATEGORIES:
            return null;
        default:
            return state;
    }
};

export const bibliography = (state = initialState.bibliography, action) => {
    switch(action.type) {
        case DATA_MANAGEMENT_CATEGORIES_INSERT_FORM_BIBLIOGRAPHY_UPDATE:
            return action.value;
        case DATA_MANAGE_GET_CATEGORIES:
            return null;
        default:
            return state;
    }
};

export const info = (state = initialState.info, action) => {
    switch(action.type) {
        case DATA_MANAGEMENT_CATEGORIES_INSERT_FORM_INFO_UPDATE:
            return action.value;
        case DATA_MANAGE_GET_CATEGORIES:
            return null;
        default:
            return state;
    }
};

const dataManageCategoryForm = combineReducers({
    categoryName,
    bibliography,
    info
});

export default dataManageCategoryForm;