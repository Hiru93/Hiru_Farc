import {
    DATA_MANAGE_INCI_INSERT_FORM_CATEGORY_UPDATE,
    DATA_MANAGE_INCI_INSERT_FORM_INCI_NAME_UPDATE,
    DATA_MANAGE_INCI_INSERT_FORM_INCI_COMMON_NAME_UPDATE,
    DATA_MANAGE_INCI_INSERT_FORM_FC_UPDATE,
    DATA_MANAGE_INCI_INSERT_FORM_BIBLIOGRAPHY_UPDATE,
    DATA_MANAGE_INCI_INSERT_FORM_INFO_UPDATE,
    DATA_MANAGE_INCI_INSERT_FORM_SENTISER_UPDATE,
    DATA_MANAGE_INCI_INSERT_FORM_SENTISER_DESC_UPDATE,
    DATA_MANAGE_INCI_INSERT_FORM_OTHER_INFO_UPDATE,
    DATA_MANAGE_INCI_INSERT_FORM_DEFAULT
} from './actionTypes';

export function updateFormField(key, value) {
    switch(key) {
        case 'category':
            return {
                type: DATA_MANAGE_INCI_INSERT_FORM_CATEGORY_UPDATE,
                value
            };
        case 'inciName':
            return {
                type: DATA_MANAGE_INCI_INSERT_FORM_INCI_NAME_UPDATE,
                value
            };
        case 'inciCommonName':
            return {
                type: DATA_MANAGE_INCI_INSERT_FORM_INCI_COMMON_NAME_UPDATE,
                value
            };
        case 'FCvalue':
            return {
                type: DATA_MANAGE_INCI_INSERT_FORM_FC_UPDATE,
                value
            };
        case 'bibliography':
            return {
                type: DATA_MANAGE_INCI_INSERT_FORM_BIBLIOGRAPHY_UPDATE,
                value
            };
        case 'info':
            return {
                type: DATA_MANAGE_INCI_INSERT_FORM_INFO_UPDATE,
                value
            };
        case 'sentiser':
            return {
                type: DATA_MANAGE_INCI_INSERT_FORM_SENTISER_UPDATE,
                value
            };
        case 'sentiserDesc':
            return {
                type: DATA_MANAGE_INCI_INSERT_FORM_SENTISER_DESC_UPDATE,
                value
            };
        case 'otherInfo':
            return {
                type: DATA_MANAGE_INCI_INSERT_FORM_OTHER_INFO_UPDATE,
                value
            };
        default:
            return {
                type: DATA_MANAGE_INCI_INSERT_FORM_DEFAULT
            }
    }
};