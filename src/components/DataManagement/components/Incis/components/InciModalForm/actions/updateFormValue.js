import {
    DATA_MANAGEMENT_MODAL_FORM_INCI_CATEGORY_UPDATE,
    DATA_MANAGEMENT_MODAL_FORM_INCI_NAME_UPDATE,
    DATA_MANAGEMENT_MODAL_FORM_INCI_COMMON_NAME,
    DATA_MANAGEMENT_MODAL_FORM_INCI_FC_VALUE_UPDATE,
    DATA_MANAGEMENT_MODAL_FORM_INCI_SENTISER_UPDATE,
    DATA_MANAGEMENT_MODAL_FORM_INCI_OTHER_INFO_UPDATE,
    DATA_MANAGEMENT_MODAL_FORM_INCI_INFO_UPDATE,
    DATA_MANAGEMENT_MODAL_FORM_INCI_BIBLIOGRAPHY_UPDATE,
    DATA_MANAGEMENT_MODAL_FORM_INCI_DEFAULT
} from './actionTypes';

export function updateFormField(key, value) {
    switch(key) {
        case 'category':
            return {
                type: DATA_MANAGEMENT_MODAL_FORM_INCI_CATEGORY_UPDATE,
                value
            };
        case 'name':
            return {
                type: DATA_MANAGEMENT_MODAL_FORM_INCI_NAME_UPDATE,
                value
            };
        case 'commonDenomination':
            return {
                type: DATA_MANAGEMENT_MODAL_FORM_INCI_COMMON_NAME,
                value
            };
        case 'fc':
            return {
                type: DATA_MANAGEMENT_MODAL_FORM_INCI_FC_VALUE_UPDATE,
                value
            };
        case 'sensitizing':
            return {
                type: DATA_MANAGEMENT_MODAL_FORM_INCI_SENTISER_UPDATE,
                value
            };
        case 'otherDiscussions':
            return {
                type: DATA_MANAGEMENT_MODAL_FORM_INCI_OTHER_INFO_UPDATE,
                value
            };
        case 'info':
            return {
                type: DATA_MANAGEMENT_MODAL_FORM_INCI_INFO_UPDATE,
                value
            };
        case 'bibliography':
            return {
                type: DATA_MANAGEMENT_MODAL_FORM_INCI_BIBLIOGRAPHY_UPDATE,
                value
            };
        default:
            return {
                type: DATA_MANAGEMENT_MODAL_FORM_INCI_DEFAULT
            }
    }
};