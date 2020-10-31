import {
    ARCHIVE_MANAGEMENT_CATEGORIES_EDIT_NAME_UPDATE,
    ARCHIVE_MANAGEMENT_CATEGORIES_EDIT_DESCRIPTION_UPDATE,
    ARCHIVE_MANAGEMENT_CATEGORIES_EDIT_FIGURES_UPDATE,
    ARCHIVE_MANAGEMENT_CATEGORIES_EDIT_UPDATE_DEFAULT
} from './actionTypes';

export function updateFormField(key, value) {
    switch(key) {
        case 'catName':
            return {
                type: ARCHIVE_MANAGEMENT_CATEGORIES_EDIT_NAME_UPDATE,
                value
            }
        case 'catDescription':
            return {
                type: ARCHIVE_MANAGEMENT_CATEGORIES_EDIT_DESCRIPTION_UPDATE,
                value
            }
        case 'catFigures':
            return {
                type: ARCHIVE_MANAGEMENT_CATEGORIES_EDIT_FIGURES_UPDATE,
                value
            }
        default:
            return {
                type: ARCHIVE_MANAGEMENT_CATEGORIES_EDIT_UPDATE_DEFAULT
            }
    }
}