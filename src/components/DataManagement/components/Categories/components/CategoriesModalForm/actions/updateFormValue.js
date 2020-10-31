import {
    DATA_MANAGEMENT_MODAL_FORM_CATEGORIES_NAME_UPDATE,
    DATA_MANAGEMENT_MODAL_FORM_CATEGORIES_INFO_UPDATE,
    DATA_MANAGEMENT_MODAL_FORM_CATEGORIES_BIBLIOGRAPHY_UPDATE,
    DATA_MANAGEMENT_MODAL_FORM_CATEGORIES_DEFAULT
} from './actionTypes';

export function updateFormField(key, value) {
    switch(key) {
        case 'name':
            return {
                type: DATA_MANAGEMENT_MODAL_FORM_CATEGORIES_NAME_UPDATE,
                value
            };
        case 'bibliography':
            return {
                type: DATA_MANAGEMENT_MODAL_FORM_CATEGORIES_BIBLIOGRAPHY_UPDATE,
                value
            };
        case 'info':
            return {
                type: DATA_MANAGEMENT_MODAL_FORM_CATEGORIES_INFO_UPDATE,
                value
            };
        default:
            return {
                type: DATA_MANAGEMENT_MODAL_FORM_CATEGORIES_DEFAULT
            };
    };
};