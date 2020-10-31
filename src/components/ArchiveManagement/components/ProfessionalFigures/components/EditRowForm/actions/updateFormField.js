import {
    ARCHIVE_MANAGEMENT_FIGURE_EDIT_NAME_UPDATE,
    ARCHIVE_MANAGEMENT_FIGURE_EDIT_DESCRIPTION_UPDATE,
    ARCHIVE_MANAGEMENT_FIGURE_EDIT_FIGURES_UPDATE,
    ARCHIVE_MANAGEMENT_FIGURE_EDIT_UPDATE_DEFAULT
} from './actionTypes';

export function updateFormField(key, value) {
    switch(key) {
        case 'figureName':
            return {
                type: ARCHIVE_MANAGEMENT_FIGURE_EDIT_NAME_UPDATE,
                value
            }
        case 'figureDescription':
            return {
                type: ARCHIVE_MANAGEMENT_FIGURE_EDIT_DESCRIPTION_UPDATE,
                value
            }
        case 'figureCategories':
            return {
                type: ARCHIVE_MANAGEMENT_FIGURE_EDIT_FIGURES_UPDATE,
                value
            }
        default:
            return {
                type: ARCHIVE_MANAGEMENT_FIGURE_EDIT_UPDATE_DEFAULT
            }
    }
}