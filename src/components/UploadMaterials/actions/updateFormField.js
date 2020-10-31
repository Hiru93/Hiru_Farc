import {
    UPLOAD_MATERIALS_CHANGE_SELECTED_CAT,
    UPLOAD_MATERIALS_CHANGE_SELECTED_PROFESSION,
    UPLOAD_MATERIALS_CHANGE_SELECTED_TITLE,
    UPLOAD_MATERIALS_CHANGE_SELECTED_DESCRIPTION,
    UPLOAD_MATERIALS_CHANGE_DEFAULT
} from './actionTypes';

export function updateFormField(key, value) {
    switch(key) {
        case 'selectedProfession':
            return {
                type: UPLOAD_MATERIALS_CHANGE_SELECTED_PROFESSION,
                value
            };
        case 'selectedCat':
            return {
                type: UPLOAD_MATERIALS_CHANGE_SELECTED_CAT,
                value
            };
        case 'title':
            return {
                type: UPLOAD_MATERIALS_CHANGE_SELECTED_TITLE,
                value
            };
        case 'description':
            return {
                type: UPLOAD_MATERIALS_CHANGE_SELECTED_DESCRIPTION,
                value
            }
        default:
            return {
                type: UPLOAD_MATERIALS_CHANGE_DEFAULT
            };
    }
}