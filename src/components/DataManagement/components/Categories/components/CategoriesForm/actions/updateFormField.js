import {
    DATA_MANAGEMENT_CATEGORIES_INSERT_FORM_CATEGORY_NAME_UPDATE,
    DATA_MANAGEMENT_CATEGORIES_INSERT_FORM_BIBLIOGRAPHY_UPDATE,
    DATA_MANAGEMENT_CATEGORIES_INSERT_FORM_INFO_UPDATE,
    DATA_MANAGEMENT_CATEGORIES_INSERT_FORM_DEFAULT
} from './actionTypes';

export function updateFormField(key, value) {
    switch(key) {
        case 'categoryName':
            return {
                type: DATA_MANAGEMENT_CATEGORIES_INSERT_FORM_CATEGORY_NAME_UPDATE,
                value
            };
        case 'bibliography':
            return {
                type: DATA_MANAGEMENT_CATEGORIES_INSERT_FORM_BIBLIOGRAPHY_UPDATE,
                value
            };
        case 'info':
            return {
                type: DATA_MANAGEMENT_CATEGORIES_INSERT_FORM_INFO_UPDATE,
                value
            };
        default:
            return {
                type: DATA_MANAGEMENT_CATEGORIES_INSERT_FORM_DEFAULT
            };
    }
};